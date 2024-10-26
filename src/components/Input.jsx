import { useState } from "react";

export default function Input({
  type,
  error,
  errorMessage,
  placeholder,
  name,
  
}) {
  const [formState, setFormState] = useState({
    name: "",
    count: 0,
    sum: 0,
  });

  function onChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <label className="input_container">
      <input
        className={`input ${formState[name] ? "input_active" : ""}`}
        autoComplete="off"
        type={type}
        data-error={error}
        name={name}
        onChange={onChange}
        value={formState[name]}
      />
      <p className="input_placeholder">{placeholder}</p>
      <p className="input_error" data-error={error}>
        {errorMessage}
      </p>
    </label>
  );
}
