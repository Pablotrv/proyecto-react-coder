import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CheckoutForm = ({ onConfirm, loggedInUserEmail }) => {
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: loggedInUserEmail || "",
  });

  useEffect(() => {
    // Si el email del usuario logueado cambia, actualizamos el estado
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      email: loggedInUserEmail || "",
    }));
  }, [loggedInUserEmail]);

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
              readOnly={!!loggedInUserEmail} // Hace el campo de solo lectura si el usuario está logueado
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
