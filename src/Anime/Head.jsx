import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Head() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchAnime = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}`
      );
      const data = response.data.data;
      setResults(data);
    } catch (error) {
      console.error("Error searching for anime:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchAnime();
  };

  return (
    <div className="container anime-search-container">
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <h1
          style={{
            fontFamily: "italic",
          }}
        >
          MyAnimes
        </h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Anime ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      <div style={{ position: "relative", padding: "15px", left: "500px" }}>
        {results.map((anime) => (
          <div
            key={anime.mal_id}
            className="anime-result"
            style={{
              width: "260px",
              textAlign: "center",
              margin: "5px",
            }}
          >
            <Link
              to={`/details/${anime.mal_id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                  display: "inline-block",
                  borderRadius: "7px",
                  position: "relative",
                  overflow: "hidden",
                  background:"black",
                }}
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="img-fluid"
                  style={{ borderRadius: "7px" }}
                />
                <h3
                  style={{
                    color: "white",
                  }}
                >
                  {anime.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Head;
