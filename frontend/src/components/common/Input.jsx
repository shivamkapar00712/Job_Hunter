import React from "react";
const InputField = ({ name, value, placeholder, errors, onChange, type }) => {
  return (
    <input
      className="form-control"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      errors={errors}
    />
  );
};

export default InputField;
