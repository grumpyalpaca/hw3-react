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
      <form onSubmit={handleCity}>
        <input type="search" placeholder="Search City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <br />
      {submittedCity && <Results city={submittedCity} />}
    </div>
  );
}
