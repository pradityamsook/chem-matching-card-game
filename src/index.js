import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// internal functionals.
// import App from "./App";
import { ConnectDatabase } from "./ConnectDatabase";

import reportWebVitals from "./reportWebVitals";

// css style customize.
import "./style/index.css";
import "./style/mvp.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <ConnectDatabase />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
