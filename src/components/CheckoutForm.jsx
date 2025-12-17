import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CheckoutForm = ({ onConfirm }) => {
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(buyer);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <h4>Completa tus datos para finalizar la compra</h4>
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit" variant="success">
        Crear Orden
      </Button>
    </Form>
  );
};

export default CheckoutForm;
