import React from "react";
import { Button } from "react-bootstrap";

const CartItem = ({ item, onRemove }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.price * item.quantity}</td>
      <td>
        <Button variant="danger" size="sm" onClick={() => onRemove(item.id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
