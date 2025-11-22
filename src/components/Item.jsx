import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
