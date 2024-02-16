import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { legacy_createStore } from "redux";
import MyReducer from "./Contact/Reducer.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import sweetalert2 from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/+esm'
import Swal from 'sweetalert2'


const store = legacy_createStore(MyReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
