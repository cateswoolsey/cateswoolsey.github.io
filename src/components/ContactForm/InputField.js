import React from "react";

function InputField({ label, type = "text", name, value, onChange, textarea }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea 
          id={name} 
          name={name} 
          value={value} 
          onChange={onChange} 
          placeholder={`Enter your ${label.toLowerCase()}`} 
        ></textarea>
      ) : (
        <input 
          type={type} 
          id={name} 
          name={name} 
          value={value} 
          onChange={onChange} 
          placeholder={`Enter your ${label.toLowerCase()}`}
          pattern={type === "tel" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : undefined} 
          required
        />
      )}
    </div>
  );
}

export default InputField;
