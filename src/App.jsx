import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContact from "./Contact/MyContact";
import UpdateContact from "./Contact/UpdateContact";
import AddContact from "./Contact/AddContact";
import SearchContact from "./Contact/SearchContact";
import Header from "./Contact/Header";
import Home from "./Contact/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<MyContact />} />
        <Route path="/edit/:id" element={<UpdateContact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/search" element={<SearchContact />} />
      </Routes>
    </BrowserRouter>
  );
}
