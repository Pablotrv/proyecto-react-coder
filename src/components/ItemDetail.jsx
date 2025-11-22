import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "../App.css";

const ItemDetail = ({ item }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} unidades`);
    // Aquí iría la lógica para añadir al carrito
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card.Img className="card-img" variant="top" src={item.img} />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <Card.Body>
            <Card.Title as="h1">{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text as="h3">${item.price}</Card.Text>
            <hr />
            <ItemCount stock={item.stock} onAdd={handleOnAdd} />
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
