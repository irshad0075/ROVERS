import React from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

export default function CartItems({ data, dispatch }) {
  const { id, title, price, thumbnail, quantity } = data;

  const incrementQuantity = () => {
    console.log("Incrementing quantity for item with id:", id);
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };
  
  const decrementQuantity = () => {
    console.log("Decrementing quantity for item with id:", id);
    if (quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } else {
      dispatch({ type: "DECREMENT_QUANTITY", payload: id });
    }
  };
  
  const removeItem = () => {
    console.log("Removing item with id:", id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={thumbnail}
            style={{
              width: "100%",
              height: "20vh",
              objectFit: "contain",
              background: " rgb(1, 7, 68)",
            }}
            className="img-fluid rounded-start"
            alt="Product"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="card-title">
                {title.length > 20 ? title.slice(0, 20) + "..." : title}
              </h6>
              <span className="badge bg-secondary">{price}</span>
            </div>

            <p className="card-text">
              <small className="text-body-secondary">
                Quantity: {quantity}
              </small>
            </p>

            <div className="item-actions">
              <button
                className="btn btn-outline-dark btn-sm me-2"
                onClick={incrementQuantity}
              >
                <FaPlus />
              </button>
              <button
                className="btn btn-outline-dark btn-sm me-2"
                onClick={decrementQuantity}
              >
                <FaMinus />
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={removeItem}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
