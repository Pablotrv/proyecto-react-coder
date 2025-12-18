import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Tu Tienda Gamer. Todos los derechos
          reservados.
        </p>
        <p>Av. Corrientes 1234, CABA, Buenos Aires</p>
        <p>Teléfono: +54 11 1234-5678</p>
      </Container>
    </footer>
  );
};

export default Footer;
