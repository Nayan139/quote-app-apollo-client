/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATIONS } from "../../Queries/Mutations";

const Signup = () => {
  const [signupForm, setsignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [singupMethod, { data, loading, error, reset }] =
    useMutation(SIGNUP_MUTATIONS);
  const navigate = useNavigate();

  const handleChange = (e) => {
    reset();
    const { name, value } = e.target;
    setsignupForm({ ...signupForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singupMethod({
      variables: {
        userNew: signupForm,
      },
    });
  };

  // if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="signup-form">
        <p>Sign up</p>
        {loading && <h4 style={{ textAlign: "center" }}>Loading...</h4>}
        {data?.response?.code === "400" && (
          <div style={{ color: "red", textAlign: "center" }}>
            {data?.response?.message}
          </div>
        )}
        {data?.response?.User && (
          <div style={{ color: "green", textAlign: "center" }}>
            {`${data?.response?.User?.firstName}  Signup Successfully.`}
          </div>
        )}
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
