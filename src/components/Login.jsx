import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    if (isRegistering) {
      // Lógica de registro
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Usuario registrado y logueado
          console.log("Usuario registrado:", userCredential.user);
          navigate("/"); // Redirigir al inicio
        })
        .catch((error) => {
          setError(error.message);
          console.error("Error de registro:", error);
        });
    } else {
      // Lógica de inicio de sesión
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Usuario logueado
          console.log("Usuario logueado:", userCredential.user);
          navigate("/"); // Redirigir al inicio
        })
        .catch((error) => {
          setError("Email o contraseña incorrectos.");
          console.error("Error de inicio de sesión:", error);
        });
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            {isRegistering ? "Crear Cuenta" : "Iniciar Sesión"}
          </Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {isRegistering ? "Registrarse" : "Ingresar"}
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError("");
              }}
            >
              {isRegistering
                ? "¿Ya tienes una cuenta? Inicia sesión"
                : "¿No tienes cuenta? Regístrate"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
