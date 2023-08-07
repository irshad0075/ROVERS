import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  FaUserCircle,
  FaHome,
  FaShoppingBag,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaTrash,
} from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
import { LoginRouteContext } from "../context/loginContext/LoginContext";
import axios from "axios";
import "../styles/NavigationBar.css";
import Cart from "../Components/Cart";

const Header = () => {
  const { state, dispatch } = useContext(LoginRouteContext);
  const { user } = state;
  const [showCart, setShowCart] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector(".main-navbar");
    const offset = 100;
    if (window.scrollY > offset) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg" className="main-navbar fixed-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            ROVERS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <FaHome className="nav-icon" />
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/products">
                <FaShoppingBag className="nav-icon" />
                Products
              </Nav.Link>

              <Nav.Link as={Link} to="/admin">
                <FaShoppingBag className="nav-icon" />
                Admin
              </Nav.Link>

              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories.map((category, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/products/category/${category}`}
                  >
                    {category.toUpperCase().replace("-", " ")}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>

            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/logout">
                    <FaSignOutAlt className="nav-icon" />
                    Logout
                  </Nav.Link>
                  <span className="user-greeting">
                    <FaUserCircle className="nav-icon" />
                    Hello, {user.username}
                  </span>
                  <Cart />
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <FaSignInAlt className="nav-icon" />
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <FaUserPlus className="nav-icon" />
                    Sign Up
                  </Nav.Link>
                </>
              )}
              {user && user.cart && user.cart.length > 0 && (
                <div className="user-cart" onClick={() => setShowCart(true)}>
                  <span className="cart-badge">{user.cart.length}</span>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
        className="cart-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user && user.cart && user.cart.length > 0 ? (
            user.cart.map((item, index) => (
              <CartItems key={index} data={item} />
            ))
          ) : (
            <p>No items in cart.</p>
          )}
          <div className="cart-footer">
            <button
              className="clear-cart-button"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              <FaTrash className="button-icon" />
              Clear Cart
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
