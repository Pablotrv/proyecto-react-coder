import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación con Firebase
    alert("Funcionalidad de login en desarrollo.");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
