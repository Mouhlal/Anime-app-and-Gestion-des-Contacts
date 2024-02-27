import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Anime/Cont.css";
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
    <div className="container p-3">
      <Head />
      <div className="all">
        {anime.map((item) => (
          <div key={item.mal_id}>
            {" "}
            <div className="cont">
              <Link
                to={`/details/${item.mal_id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={item.images.webp.image_url} alt="" />
                <div className="items">
                  <h5 id="tit" className="p-2">
                    {item.title}
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
