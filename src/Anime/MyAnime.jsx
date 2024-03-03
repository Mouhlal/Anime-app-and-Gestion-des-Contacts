import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Head from "./Head";

export default function MyAnime() {
  const [anime, setAnime] = useState([]);

  const url = "https://api.jikan.moe/v4/anime";

  const getApi = async () => {
    try {
      const response = await axios.get(url);
      setAnime(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="overflow-hidden p-10 bg-gray-700 ">
      <Head />
      <div className="sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-beetwen gap-10 sm:gap-16 flex-col h-[380] w-[260] ">
        {anime.map((item) => (
          <div
            key={item.mal_id}
            className="text-center m-3 relative left-5 w-64 h-[100]"
          >
            <Link
              to={`/details/${item.mal_id}`}
              className="no-underline text-black text-center sm:text-center"
            >
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                className="rounded sm:m-1 w-64 h-96"
              />
              <h5 className="p-2 sm:text-center text-center text-white relative font-bold">
                {item.title}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
