import React from "react";
import Weather from "./weather";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Akangbe kafilat and is 
          <a
            href="https://github.com/Bisluv/reat-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          {""}
        </footer>
      </div>
    </div>
  );
}

export default App;
