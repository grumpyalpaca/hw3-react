import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Results(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  useEffect(() => {
    function showTemperature(response) {
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(Math.round(response.data.wind.speed));
      document.getElementById(
        "icon"
      ).src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    }

    const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
  }, [props.city]);

  return (
    <div>
      <h3>Climatic Conditions in {props.city}</h3>
      <div className="Results">
        Temperature: {temperature}°C <br />
        Description: {description} <br />
        Humidity: {humidity}% <br />
        Wind: {wind} km/h <br />
        <div className="clearfix weather-temperature">
          <img src="" alt={description} id="icon" className="float-left" />
        </div>
      </div>
    </div>
  );
}
