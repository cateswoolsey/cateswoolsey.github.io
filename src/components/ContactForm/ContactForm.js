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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic (e.g., send data to API)
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputs}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputs}
      />
      <InputField
      label="Phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange = {handleInputs}
      />
      <InputField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputs}
        textarea
      />
      <SubmitButton />
    </form>
  );
}

export default ContactForm;
