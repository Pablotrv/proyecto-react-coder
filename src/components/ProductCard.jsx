import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={product.img}
        style={{ height: "200px", objectFit: "contain", padding: "10px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text as="h5">${product.price}</Card.Text>
        <Link to={`/item/${product.id}`} className="mt-auto">
          <Button variant="primary" className="w-100">
            Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
