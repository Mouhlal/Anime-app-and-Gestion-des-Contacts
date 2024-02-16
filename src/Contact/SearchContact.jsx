import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function SearchContact() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const contact = useSelector((state) => state.contacts);

  function Chercher(event) {
    event.preventDefault();
    if (search === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a search term!",
      });
    } else {
      const filtreData = contact.filter(
        (contacts) => contacts.nom === search || contacts.prenom === search
      );
      if (filtreData.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No matching contacts found!",
        });
      } else {
        setData(filtreData);
      }
    }
  }
  return (
    <div>
      <form>
        <br />
        <h4 className="text-center"> Search Contacts </h4>
        <br />
        <div className="input-group mb-3 container">
          <span className="input-group-text">
            {" "}
            <i className="bi bi-search"></i>{" "}
          </span>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor="floatingInputGroup1">Username</label>
          </div>
          <button onClick={Chercher} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <br />
      {data.length > 0 ? (
        <div>
          {data.map((contact) => (
            <div key={contact.id} className="text-center">
              ID : {contact.id} <br />
              Nom : {contact.nom} <br />
              Prenom : {contact.prenom} <br />
              Telephone : {contact.tel} <br />
              <hr />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
