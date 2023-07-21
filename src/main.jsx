import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

// NODE_ENV環境変数の設定（任意）
const NODE_ENV = "development";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default NODE_ENV;
