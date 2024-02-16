import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function SearchContact() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const contact = useSelector((state) => state.contacts);

  function Chercher(event) {
    event.preventDefault();
    if (search == "" ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Not found !",
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
        setData(filtreData[0]);
      }
      
    }
  }
  return (
    <div>
      <form>
        <br />
        <h4 className="text-center"> Search Contacts </h4>
        <br />
        <div class="input-group mb-3 container">
          <span class="input-group-text">
            {" "}
            <i class="bi bi-search"></i>{" "}
          </span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label for="floatingInputGroup1">Username</label>
          </div>
          <button onClick={Chercher} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <br />{" "}
      {data && (
        <div className="text-center">
          ID : {data.id} <br />
          Nom : {data.nom}
          <br />
          Prenom : {data.prenom} <br />
          Telephone : {data.tel} <br />
        </div>
      )}
    </div>
  );
}
