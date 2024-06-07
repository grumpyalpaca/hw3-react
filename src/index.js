import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Search from "./Search";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <Search />
  </React.StrictMode>,
  rootElement
);
