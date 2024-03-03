import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Head() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchAnime = async () => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}`
      );
      const data = response.data.data;
      navigate(`/search?query=${search}`, { state: { results: data } });
    } catch (error) {
      console.error("Error searching for anime:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchAnime();
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row justify-around relative ">
      <Link to={"/"} className="no-underline text-black inline-block ">
        <h1 className="font-bold relative sm:p-4 right-55 sm:right-20">
          <span className="text-white p-1">My</span>
          <span className="transition-all duration-300 hover:text-blue-500">
            Animes
          </span>
        </h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="relative flex sm:left-96 m-4 lg:relative ">
          <input
            type="text"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 lg:right-60 "
            placeholder="Search Anime ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-gray-300 transition duration-300 ease-in-out "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default Head;
