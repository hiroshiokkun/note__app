import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
const NODE_ENV = "production";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
