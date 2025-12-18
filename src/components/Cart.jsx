import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { Button, Container, Table, Alert } from "react-bootstrap";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase/config.js";
import CheckoutForm from "./CheckoutForm.jsx";
import CartItem from "./CartItem.jsx";
import { useAuth } from "../context/authContext.jsx";

const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);
  const { currentUser } = useAuth();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (buyerData) => {
    setLoading(true);

    // Si el usuario está logueado, agregamos su ID a la orden
    const buyerInfo = currentUser
      ? { ...buyerData, id: currentUser.uid }
      : buyerData;

    const order = {
      buyer: buyerInfo,
      items: cart.map(({ id, name, price, quantity }) => ({
        id,
        name,
        price,
        quantity,
      })),
      total: total,
      date: serverTimestamp(),
      status: "generada", // Estado inicial de la orden
    };

    // Crear un batch para actualizar múltiples documentos a la vez
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");

    // Array para verificar si hay stock
    const outOfStock = [];

    // Por cada item en el carrito, verificamos y actualizamos su stock
    for (const item of cart) {
      const productRef = doc(db, "products", item.id);
      if (item.stock >= item.quantity) {
        batch.update(productRef, {
          stock: item.stock - item.quantity,
        });
      } else {
        outOfStock.push(item);
      }
    }

    if (outOfStock.length > 0) {
      const productNames = outOfStock.map((p) => p.name).join(", ");
      alert(
        `No hay stock suficiente para los siguientes productos: ${productNames}`
      );
      setLoading(false);
      return; // Detenemos la ejecución
    }

    try {
      const docRef = await addDoc(ordersRef, order); // Creamos la orden
      await batch.commit(); // Ejecutamos las actualizaciones de stock
      setOrderId(docRef.id); // Este es tu "número de envío"
      clearCart();
    } catch (error) {
      console.error("Error al procesar la orden: ", error);
      alert("Hubo un error al procesar tu orden. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center my-5">
        <h2>Procesando tu orden...</h2>
      </Container>
    );
  }

  if (orderId) {
    return (
      <Container className="text-center my-5">
        <h2>¡Gracias por tu compra!</h2>
        <Alert variant="success">
          Tu número de envío (ID de orden) es: <strong>{orderId}</strong>
        </Alert>
        <Link to="/">
          <Button variant="primary">Ir a la tienda</Button>
        </Link>
      </Container>
    );
  }

  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega productos para empezar a comprar!</p>
        <Link to="/">
          <Button variant="primary">Ir a la tienda</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2>Resumen de tu compra</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeItem} />
          ))}
        </tbody>
      </Table>
      <h3>Total de la compra: ${total}</h3>
      <Button variant="danger" onClick={clearCart} className="me-3">
        Vaciar Carrito
      </Button>
      <hr />
      <CheckoutForm
        onConfirm={handleCheckout}
        loggedInUserEmail={currentUser?.email}
      />
    </Container>
  );
};

export default Cart;
