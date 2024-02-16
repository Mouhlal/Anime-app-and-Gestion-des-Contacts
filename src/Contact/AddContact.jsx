import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_Contact } from "./Actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function AddContact() {
  const disp = useDispatch();
  const navg = useNavigate();
  const [newnom, setNewnom] = useState("");
  const [newprenom, setNewprenom] = useState("");
  const [newtel, setNewtel] = useState("");
  function Ajouter(r) {
    r.preventDefault();
    if (newnom == "" && newprenom == "" && newtel == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter all status !",
      });
    } else {
      let ooo = {
        id: Math.floor(Math.random() * 100) + 1,
        nom: newnom,
        prenom: newprenom,
        tel: newtel,
      };
      disp(Add_Contact(ooo));
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navg("/contact");
    }
  }
  return (
    <div
      className=" text-center container"
      style={{ position: "relative", top: "33px" }}
    >
      <form>
        <h4>Add a new contact</h4>

        <div class="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nom..."
            value={newnom}
            onChange={(e) => setNewnom(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Prenom..."
            value={newprenom}
            onChange={(e) => setNewprenom(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+212..."
            value={newtel}
            onChange={(e) => setNewtel(e.target.value)}
          />
          <br />
          <button className="btn btn-danger" onClick={Ajouter}>
            ADD
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
