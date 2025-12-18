import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import logo from "../assets/logo.png";
import { products } from "../data/products.jsx";
import { useAuth } from "../context/authContext.jsx";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Error on logout", error));
  };

  // Obtenemos las categorías únicas de los productos
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="justify-content-between"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            {categories.map((category) => (
              <Nav.Link
                as={NavLink}
                key={category}
                to={`/category/${category}`}
              >
                {/* Capitalizamos la primera letra para mostrarla */}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <CartWidget />
          {currentUser ? (
            <div className="d-flex align-items-center ms-3">
              <span className="text-white me-3">{currentUser.email}</span>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" className="ms-3">
              <Button variant="outline-light">Login</Button>
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
