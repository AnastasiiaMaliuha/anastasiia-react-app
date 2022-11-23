import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "/",
      date: "Today 12:00",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter the city"
                className="form-control bg-light"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Current"
                className="btn btn-outline-dark"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="degrees">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" className="link-dark">
                  {" "}
                  C°|
                </a>
                <a href="/" className="link-secondary">
                  {" "}
                  F°
                </a>
              </span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {weatherData.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b4405bfb7a5db786b5a1848ede61239e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Load...";
  }
}
