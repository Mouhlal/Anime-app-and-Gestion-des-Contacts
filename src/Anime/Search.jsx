import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Head from "./Head";

export default function Search() {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (location.state && location.state.results) {
      setResults(location.state.results);
    }
  }, [location.state]);

  return (
    <div className="bg-gray-700 p-3  overflow-hidden">
      <Head />
      {results.map((anime) => (
        <div key={anime.mal_id} className="m-12 relative -md:right-48 ">
          <Link to={`/details/${anime.mal_id}`} className="no-underline">
            <div className="relative md:w-72 md:overflow-hidden  md:left-96 md:m-16 md:p-5">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="rounded"
              />
              <h3 className="text-white text-center">
                <span className="font-sans">{anime.title}</span>
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
