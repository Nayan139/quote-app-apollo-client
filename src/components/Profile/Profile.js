import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("a");
  const navigate = useNavigate();
  const getRandomCharacter = () => {
    var randomCharCode = Math.floor(Math.random() * 26) + 97; // Random number between 97 and 122 (ASCII codes for lowercase letters)
    var randomCharacter = String.fromCharCode(randomCharCode);
    return randomCharacter;
  };

  useEffect(() => {
    const isChar = getRandomCharacter();
    setName(isChar);
  }, []);

  return (
    <div className="container-profile">
      <div className="profile">
        <img src={`https://robohash.org/${name}.png?200*200`} alt="profile" />
        <h1> Name :- Nayan </h1>
        <h3> Email :- nayanbhakhar7075@gmail.com </h3>
        <div className="btn-action">
          <button
            onClick={() => navigate("/create/quote")}
            className="btn-create"
          >
            Create Quote
          </button>
          <button className="btn-create" onClick={() => navigate("/")} type="submit">
            Back
          </button>
        </div>
      </div>
      <div className="quote-title">
        <h1>Your Quote...</h1>
      </div>
      <div className="quotes-list">
        <figure>
          <blockquote>
            <p>
              Words can be like X-rays, if you use them properly—they’ll go
              through anything. You read and you’re pierced.
            </p>
          </blockquote>
          <figcaption>—Aldous Huxley</figcaption>
        </figure>
        <figure>
          <blockquote>
            <p>
              Words can be like X-rays, if you use them properly—they’ll go
              through anything. You read and you’re pierced.
            </p>
          </blockquote>
          <figcaption>—Aldous Huxley</figcaption>
        </figure>
        <figure>
          <blockquote>
            <p>
              Words can be like X-rays, if you use them properly—they’ll go
              through anything. You read and you’re pierced.
            </p>
          </blockquote>
          <figcaption>—Aldous Huxley</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Profile;
