import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../../Queries/Queries";

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log("error", error,data);
  }
  return (
    <div className="container-home">
      <div className="quote-title">
        <h1>All Quotes...</h1>
        <div className="btn-action">
          <button
            onClick={() => navigate("/create/quote")}
            className="btn-create"
          >
            Create Quote
          </button>
          <button onClick={() => navigate("/profile")} className="btn-create">
            Profile
          </button>
        </div>
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

export default Home;
