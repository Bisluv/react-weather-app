import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Bisluv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akangbe Kafilat
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Bisluv/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
