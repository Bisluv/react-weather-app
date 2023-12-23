import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <input
        type="search"
        placsholder="Enter a City..."
        className="form-control"
      />
      <h1>Newyork</h1>
      <ul>
        <li>Saturday 09:41</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity 60%</li>
            <li>Wind 13km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
