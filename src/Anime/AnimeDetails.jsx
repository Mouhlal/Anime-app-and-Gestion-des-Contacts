import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Head from "./Head";

export default function AnimeDetails() {
  const { mal_id } = useParams();
  const [anime, setAnime] = useState({});

  const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setAnime(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Head />
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={anime.images && anime.images.jpg && anime.images.jpg.image_url}
            alt=""
            className="img-fluid rounded shadow"
            style={{ position: "relative", left: "25px" }}
          />
        </div>
        <div className="col-md-8">
          <h2>{anime.title} </h2>
          <p className="text-muted">
            <b>Type:</b> {anime.type}
          </p>
          <p className="text-muted">
            <b>Episodes:</b> {anime.episodes}
          </p>
          <p className="text-muted">
            <b>Score:</b> {anime.score}
          </p>
          <p className="text-muted">
            <b>Start Date:</b> {anime.year}
          </p>
          <p className="text-muted">
            <b>Airing :</b> {anime.aired && anime.aired.string}
          </p>
          <p className="text-muted">
            <b>Genres:</b>
          </p>
          <ul className="list-unstyled">
            {anime.genres &&
              anime.genres.map((genre, index) => (
                <li key={index} className="d-inline me-3">
                  {genre.name}
                </li>
              ))}
          </ul>
          <hr />
          <p>{anime.synopsis}</p>
          {anime.trailer && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Trailer"
                className="embed-responsive-item"
                src={anime.trailer && anime.trailer.embed_url}
                allowFullScreen
                width={470}
                height={470}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
