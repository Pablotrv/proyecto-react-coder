import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg"; // Asegúrate de tener un ícono de carrito en esta ruta

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <img src={cartIcon} alt="Cart icon" width="30" />
      {totalQuantity > 0 && (
        <span className="badge bg-danger rounded-pill">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;
