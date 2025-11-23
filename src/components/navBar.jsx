import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Nav.Link as={NavLink} to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Nav.Link>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          TRV Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/teclados">
              Teclados
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/mouses">
              Mouses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/monitores">
              Monitores
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
