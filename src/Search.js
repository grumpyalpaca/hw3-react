import React, { useState } from "react";
import Results from "./Results";

export default function Search() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleCity(event) {
    event.preventDefault();
    setSubmittedCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleCity}>
          <input type="search" placeholder="Search City" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
        <br />
        {submittedCity && <Results city={submittedCity} />}
      </div>
      <footer>
  This project was coded by{" "}
  <a
    href="https://github.com/grumpyalpaca"
    target="_blank"
    rel="noreferrer"
  >
    Elly
  </a>
  , code hosted on{" "}
  <a
    href="https://github.com/grumpyalpaca/hw3-react"
    target="_blank"
    rel="noreferrer"
  >
    Github
  </a>
  {" "}and website hosted on{" "}
  <a
    href="https://main--stirring-pothos-4bbbe8.netlify.app//"
    target="_blank"
    rel="noreferrer"
  >
    Netlify
  </a>
</footer>
    </div>
  );
}
