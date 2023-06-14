import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupForm, setsignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupForm({ ...signupForm, [name]: value });
  };

  return (
    <div className="container">
      <form className="signup-form">
        <p>Sign up</p>
        <input
          onChange={(e) => handleChange(e)}
          required
          placeholder="First Name"
          type="text"
          name="firstName"
        />
        <input
          onChange={(e) => handleChange(e)}
          required
          placeholder="Last Name"
          type="text"
          name="lastName"
        />
        <input
          onChange={(e) => handleChange(e)}
          required
          placeholder="Email"
          type="email"
          name="email"
        />
        <input
          onChange={(e) => handleChange(e)}
          required
          placeholder="Password"
          type="password"
          name="password"
        />
        <button type="submit">Sign in</button>
        <p className="link-auth" onClick={() => navigate("/signin")}>
          Already, have you account?
        </p>
      </form>
    </div>
  );
};

export default Signup;
