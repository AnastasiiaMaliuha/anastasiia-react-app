import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="degrees">
            <span className="temperature">
              {Math.round(props.data.temperature)}
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
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
