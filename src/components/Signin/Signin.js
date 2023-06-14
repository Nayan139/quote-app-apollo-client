import React, { useState } from "react";
import "./Signin.css";
import {  useNavigate } from "react-router-dom";

const Signin = () => {
  const [signinForm, setsigninForm] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsigninForm({ ...signinForm, [name]: value });
  };

  return (
    <div className="container">
      <form className="signin-form">
        <p>Sign in</p>
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
         <p className="link-auth" onClick={()=>navigate('/signup')}>Don't have an account?</p>
      </form>
    </div>
  );
};

export default Signin;
