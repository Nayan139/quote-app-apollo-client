import React, { useState } from "react";
import "./CreateQuote.css";
import { useNavigate } from "react-router-dom";

const CreateQuote = () => {
  const [createQuote, setsCreateQuote] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsCreateQuote({ ...createQuote, [name]: value });
  };

  console.log(createQuote);
  return (
    <div className="container">
      <form className="createquote-form">
        <p>Create Quote</p>
        <textarea
          rows="9"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Quote"
          type="text"
          name="name"
        />
        <button type="submit">Create</button>
        <button onClick={() => navigate("/")} >
          Back
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
