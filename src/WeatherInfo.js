import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

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
          <WeatherIcon code={props.data.icon} />

          <span className="degrees">
            <WeatherTemp celsius={props.data.temperature} />
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
