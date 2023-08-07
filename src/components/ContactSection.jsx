import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save the data to local storage
    saveDataToLocalStorage();
    // Show success SweetAlert
    showSuccessAlert();
    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const saveDataToLocalStorage = () => {
    const contactData = JSON.parse(localStorage.getItem("contactData")) || [];
    const newData = {
      name: name,
      email: email,
      message: message,
    };
    contactData.push(newData);
    localStorage.setItem("contactData", JSON.stringify(contactData));
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We will get back to you soon.",
      confirmButtonText: "OK",
    });
  };

  return (
    <div id="Contact" className="contact-container">
      <div className="contact">
        <h1 className="heading">Contact Us</h1>
        <div className="row">
          <iframe
            src="https://goo.gl/maps/rj22eWCnFD3FRtrC9"
            title="Location"
          ></iframe>
          <form onSubmit={handleFormSubmit}>
            <h3>Book Appointment</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="box"
              required
              placeholder="Your Message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
