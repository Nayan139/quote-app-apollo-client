/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATIONS } from "../../Queries/Mutations";

const Signin = () => {
  const [signinForm, setsigninForm] = useState({
    email: "",
    password: "",
  });

  const [singinMethod, { data, loading, error, reset }] =
    useMutation(SIGNIN_MUTATIONS);

  const navigate = useNavigate();
  const handleChange = (e) => {
    reset();
    const { name, value } = e.target;
    setsigninForm({ ...signinForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singinMethod({
      variables: {
        signIn: signinForm,
      },
    });
  };

  if (data?.user?.Token) {
    localStorage.setItem('token',data?.user?.Token)
  }

  //  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="signin-form">
        <p>Sign in</p>
        {loading && <h4 style={{textAlign:"center"}}>Loading...</h4>}
        {!data?.user?.status && (
          <div style={{ color: "red", textAlign: "center" }}>
            {data?.user?.message}
          </div>
        )}
        {data?.user?.Token && (
          <div style={{ color: "green", textAlign: "center" }}>
            Signin Successfully.
          </div>
        )}
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
        <p className="link-auth" onClick={() => navigate("/signup")}>
          Don't have an account?
        </p>
      </form>
    </div>
  );
};

export default Signin;
