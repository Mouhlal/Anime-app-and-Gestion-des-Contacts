import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <h2 className="text-center pt-2">
      <i className="bi bi-journal-text"></i> Gestion des Contacts
      </h2>
          <br />
      <h4 style={{display:"flex" , justifyContent:"space-around"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <i className="bi bi-house-door-fill"></i> Home
        </Link>


        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <i className="bi bi-person-lines-fill"></i> Contact
        </Link>

        
        <Link style={{ textDecoration: "none" }} to="/add">
          <i className="bi bi-person-plus-fill"></i> Add Contact
        </Link>
        

        <Link to="/search" style={{ textDecoration: "none" }}>
        <i className="bi bi-search"></i>  Search Contact
        </Link>
      </h4>
    </div>
  );
};
export default Header;
