// src/pages/Contact.js
import React from "react";
import ContactForm from "../components/ContactForm/ContactForm"; 
import "../styles/ContactForm.css"; 

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you! Please fill out the form below.</p>
      <ContactForm /> 
    </div>
  );
}

export default Contact;
