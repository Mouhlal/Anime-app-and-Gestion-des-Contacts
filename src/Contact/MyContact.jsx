import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete_Contact } from "./Actions";
import { AllContacts } from "./Reducer";

export default function MyContact() {
  const data = useSelector(AllContacts);
  const dispatch = useDispatch();

  function Delete(id) {
    dispatch(Delete_Contact(id));
  }

  return (
    <div className="container">
      <br /> <br />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Telephone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td> {d.id} </td>
              <td> {d.nom} </td>
              <td> {d.prenom} </td>
              <td> {d.tel} </td>
              <td>
                <Link to={`/edit/${d.id}`} className="btn btn-primary">
                  {" "}
                  <i className="bi bi-pencil-square"> </i>
                </Link>{" "}
                <span style={{ padding: "2px" }}> </span>
                <button onClick={() => Delete(d.id)} className="btn btn-danger">
                  {" "}
                  <i className="bi bi-x-lg"></i>{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
