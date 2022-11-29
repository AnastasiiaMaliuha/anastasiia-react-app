import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>

        <Weather defaultCity="New York" />
        <footer>
          {" "}
          Project created by Anastasiia Maliuha, view at
          <a
            href="https://github.com/AnastasiiaMaliuha/anastasiia-react-app/settings"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
