import React, { useState } from "react";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ maxWidth: "200px" }}
    >
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={decrement}>
          -
        </Button>
        <FormControl className="text-center" value={count} readOnly />
        <Button variant="outline-secondary" onClick={increment}>
          +
        </Button>
      </InputGroup>
      <Button
        variant="primary"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
