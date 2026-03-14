import { useState } from "react";
import InputComponent from "./InputComponent";
import useInput from "../hooks/useInput";
export default function LoginState() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  const {
    value: emailValue,
    isEdited: emailIsEdited,
    handleValueChange: handleEmailChange,
    handleIsEdited: handleEmailBlur,
    setValue: setEmailValue,
  } = useInput("");

  const {
    isEdited: isPaswordEdited,
    setValue: setPasswordValue,
    handleIsEdited: handleIsEditedPassword,
    handleValueChange: handlePasswordChange,
    value: valuePasword,
  } = useInput("");

  const isEmailInvalid = !emailValue.includes("@") && emailIsEdited;
  const isPasswordInvalid = valuePasword.length < 5 && isPaswordEdited;

  function handleReset() {
    setEmailValue("");
    setPasswordValue("");
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <InputComponent
        type="email"
        id="email"
        name="email"
        errorMessage="Please enter invalid email"
        errorHandler={isEmailInvalid}
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={valuePasword}
          onChange={handlePasswordChange}
          onBlur={handleIsEditedPassword}
        />
        {isPasswordInvalid && (
          <div className="invalid-feedback d-block">
            password length must be greather than 5.
          </div>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
