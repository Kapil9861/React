import React, { useState } from "react";
import "./login.css";
import md5 from "md5";

function Signin() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  // Form handling before submission
  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }

    document.getElementById(name).style.fontFamily = "Montserrat black";
  };

  const setEmptyValue = (event) => {
    const name = event.target.name;
    document.getElementById(name).value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="login">
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            onFocus={setEmptyValue}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            onFocus={setEmptyValue}
            className="text_input"
          />
        </div>
        <input type="submit" value="LOGIN" className="btn" />
      </form>
      <a className="link" href="/signup">
        Sign Up
      </a>
    </div>
  );
}

export default Signin;
