import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../../Queries/Queries";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log("error", error);
  }

  console.log("data is here", data);
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
        {data.quates.length ? (
          data.quates.map((quote, index) => (
            <figure key={index}>
              <blockquote>
                <p>{quote.name}</p>
              </blockquote>
              <figcaption>—{quote.by.firstName}</figcaption>
            </figure>
          ))
        ) : (
          <figure>
            <blockquote>
              <p>No Quotes, yet.</p>
            </blockquote>
          </figure>
        )}
      </div>
    </div>
  );
};

export default Home;
