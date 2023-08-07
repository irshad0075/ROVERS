import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../assets/images/login.png";
import Swal from "sweetalert2";
import { LoginRouteContext } from "../context/loginContext/LoginContext";

export default function Login() {
  const { dispatch } = useContext(LoginRouteContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "abc@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "Tabeer123";

  const getUserInfo = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
    const payload = { email, password };
    console.log(payload);
    if (email === userName && password === userPassword) {
      Swal.fire("Good job!", "You Successfully logged In!", "success");
      dispatch({
        type: "Login",
        payload: { email: userName, password: userPassword, username: "" },
      });
      navigate("/ProductPage");
    } else {
      Swal.fire("Invalid Email or Password!", "Try Again!", "error");
    }
  };

  return (
    <div className="login-container mt-5">
      <div className="img">
        <img src={LoginImg} alt="Login" style={{height:"750px"}}/>
      </div>
      <div className="form-container">
        <form className="Auth-form" onSubmit={getUserInfo}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title" style={{ color: " rgb(1, 7, 68)" }}>
              Log In
            </h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn"
                style={{ background: " rgb(1, 7, 68)", color: "white" }}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Having no account <Link to="/SignUp">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
