import React from "react";
import "../styles/ContactForm.css"; // We'll create this CSS next

function ContactForm() {
  return (
  <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Type your message"></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default ContactForm;
