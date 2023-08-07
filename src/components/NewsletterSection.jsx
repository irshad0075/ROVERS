import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Save the email to local storage
    saveEmailToLocalStorage(email);
    // Show SweetAlert
    showSuccessAlert();
    // Clear the email input
    setEmail("");
  };

  const saveEmailToLocalStorage = (email) => {
    const subscribedEmails =
      JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    subscribedEmails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Subscribed Successfully!",
      text: "Thank you for subscribing to our newsletter.",
      confirmButtonText: "OK",
    });
  };

  return (
    <section className="newsletter">
      <h3>Subscribe to Our newsletter</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
        tempore.
      </p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe" />
      </form>
    </section>
  );
};

export default NewsletterSection;
