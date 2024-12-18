import { forwardRef, useEffect, useState } from "react";

const Input = forwardRef(function Input(
  { errorMessage, placeholder, name, autoFocus, formState, setFormState, onChange, number },
  ref
) {
  const [error, setError] = useState(false);

  function onChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    if (number) {
      if (/^\d*$/.test(value)) {
        setFormState((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  }

  useEffect(() => {
    if (formState[name] === "") {
      setError(true);
    } else {
      setError(false);
    }
  }, [formState]);

  return (
    <label className="input_container">
      <input
        ref={ref}
        className={`input ${formState[name] ? "input_active" : ""}`}
        autoComplete="off"
        data-error={error}
        name={name}
        onChange={onChange}
        value={formState[name]}
        required
        form="form"
        autoFocus={autoFocus}
      />
      <p className="input_placeholder">{placeholder}</p>
      <p className="input_error" data-error={error}>
        {errorMessage ? errorMessage : "!"}
      </p>
    </label>
  );
});

export default Input;
