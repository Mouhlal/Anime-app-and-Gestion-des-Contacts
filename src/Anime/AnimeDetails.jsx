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
    <div className="bg-gray-700  md:overflow-hidden text-white min-h-screen">
      <div className="p-2">
        <Head />
      </div>
      <div className="">
        <div className="text-center">
          <div className="md:relative">
            <img
              src={
                anime.images && anime.images.jpg && anime.images.jpg.image_url
              }
              alt={anime.title}
              className="rounded m-1 relative left-16 md:top-10"
            />
          </div>
          <div className="m-5 md:relative md:bottom-80 md:left-52">
            <h1 className="text-black font-serif">{anime.title} </h1>
            <p className="">
              Type: <span className="font-bold">{anime.type}</span>
            </p>
            <p className="">
              Episodes: <span className="font-bold">{anime.episodes}</span>
            </p>
            <p className="">
              Score: <span className="font-bold">{anime.score}</span>
            </p>
            <p className="">
              Start Date:<span className="font-bold">{anime.year}</span>
            </p>
            <p className="">
              Airing :{" "}
              <span className="font-bold">
                {anime.aired && anime.aired.string}
              </span>
            </p>
            <p className="text-white font-bold">Genres:</p>
            <ul className="list-none flex flex-wrap gap-4 justify-center md:justify-center">
              {anime.genres &&
                anime.genres.map((genre, index) => (
                  <li key={index} className="text-red-400">
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          {anime.trailer && (
            <div className="md:relative md:bottom-80">
              <p className="md:relative md:w-96 md:left-9">{anime.synopsis}</p>
              <iframe
                title="Trailer"
                className="embed-responsive-item m-1 p-5 sm:absolute sm:bottom-24 sm:left-1/2 sm:-translate-y-full sm:w-1/2 sm:h-96"
                src={anime.trailer && anime.trailer.embed_url}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
