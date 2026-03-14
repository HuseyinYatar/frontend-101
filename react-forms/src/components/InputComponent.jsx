import React from "react";

const InputComponent = ({
  type,
  id,
  name,
  errorMessage,
  errorHandler,
  ...props
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        Email
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        {...props}
      />
      {errorHandler && (
        <div className="invalid-feedback d-block">{errorMessage}</div>
      )}
    </div>
  );
};

export default InputComponent;
