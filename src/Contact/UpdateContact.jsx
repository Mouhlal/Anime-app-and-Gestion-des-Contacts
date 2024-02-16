import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Edit_Contact } from "./Actions";
import Swal from "sweetalert2";

export default function UpdateContact() {
  const { id } = useParams();
  const cont = useSelector((state) =>
    state.contacts.filter((z) => z.id === id)
  );
  const disp = useDispatch();
  const navg = useNavigate();

  const [unom, setUnom] = useState("");
  const [uprenom, setUprenom] = useState("");
  const [utel, setUtel] = useState("");

  function Edit(t) {
    t.preventDefault();
    if (unom == "" || uprenom == "" || utel == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter all status !",
      });
    } else {
      const ed = {
        id: id,
        nom: unom,
        prenom: uprenom,
        tel: utel,
      };
      disp(Edit_Contact(ed));
      Swal.fire({
        icon: "success",
        title: "Your Modification with succes",
        timer: 1500,
      });
      navg("/contact");
    }
  }
  return (
    <div>
      <br />
      <form onSubmit={Edit}>
        <h4 className="text-center"> Update Contact </h4>
        <br />
        <div className="mb-3 text-center container">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nom..."
            value={unom}
            onChange={(e) => setUnom(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Prenom..."
            value={uprenom}
            onChange={(e) => setUprenom(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+212..."
            value={utel}
            onChange={(e) => setUtel(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Update
          </button>
          {""} {""} {""}
          <Link to={"/contact"}>
            <button className="btn btn-success">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
