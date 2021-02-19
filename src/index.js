import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </>,
  document.getElementById("root")
);
