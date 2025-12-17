import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si ya está, actualizamos la cantidad
      setCart(
        cart.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + quantity };
          }
          return product;
        })
      );
    } else {
      // Si no está, lo agregamos
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((product) => product.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
