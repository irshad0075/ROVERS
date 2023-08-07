import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import signupImage from "../assets/images/signup.png";
import "../styles/SignupDetail.css";

function SignupDetail() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address: "",
    userName: "",
    contact: "",
  });

  const { email, password, address, userName, contact, state, zip } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Data has been logged in the console.",
    });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-image">
          <img
            src={signupImage}
            alt="Login"
            style={{ height: "600px", width: "600px" }}
          />
        </div>
        <div className="signup-form ">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGriduserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                placeholder="User Name"
                value={userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridcontact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  value={contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <div style={{ marginTop: "20px" }}>
              <Form.Group controlId="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <p className="sign-up">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupDetail;
