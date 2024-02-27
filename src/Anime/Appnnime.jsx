import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAnime from "./MyAnime";
import AnimeDetails from "./AnimeDetails";

export default function Appnnime() {
  return (
    <Routes>
      <Route path="/" element={<MyAnime />} />
      <Route path="/details/:mal_id" element={<AnimeDetails />} />
    </Routes>
  );
}
