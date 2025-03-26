import React, { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const formatPhoneNumber = (value) => {
    const phoneDigits = value.replace(/\D/g, "");

    if (phoneDigits.length <= 3) {
      return phoneDigits;
    } else if (phoneDigits.length <= 6) {
      return `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3)}`;
    } else {
      return `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6, 10)}`;
    }
  };


  const handleInputs = (e) => {
    const { name, value } = e.target;
    
    const formattedValue = name === "phone" ? formatPhoneNumber(value) : value;

    setFormData({
      ...formData,
      [name]: formattedValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("https://formspree.io/f/xqaploal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <InputField
          label="NAME"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputs}
        />
        <InputField
          label="EMAIL"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputs}
        />
        <InputField
          label="PHONE"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputs}
        />
        <InputField
          label="MESSAGE"
          name="message"
          value={formData.message}
          onChange={handleInputs}
          textarea
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default ContactForm;
