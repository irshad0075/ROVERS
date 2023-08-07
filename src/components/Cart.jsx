import React, { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/cartContext/CartContext";
import CartItems from "../Components/CartItems";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const addToCart = (product, productQuantity) => {
    const payload = {
      id: product.id,
      name: product.title,
      quantity: productQuantity,
      price: product.price,
    };
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const calculateTotalPrice = () => {
    return state.cart.reduce(
      (total, item) =>
        item.price ? total + item.quantity * item.price : total,
      0
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-outline-light position-relative"
      >
        <FaShoppingCart />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        name="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <button
              className="ms-4 btn btn-outline-danger"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              <FaTrash className="me-2" />
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.map((val, key) => (
            <CartItems key={key} data={val} dispatch={dispatch} />
          ))}
          <div className="cart-total">
            Total Price: ${calculateTotalPrice().toFixed(2)}{" "}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
