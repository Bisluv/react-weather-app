import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
      <input
        type="search"
        placeholder="Enter a City..."
        className="form-control"
      />
      </div>
      <div className="col-3">
      <input type="submit" value="search" className="btn btn-primary"/>
      
      </div>
    </div>
      </form>
      <h1>Newyork</h1>
      <ul>
        <li>Saturday 09:41</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
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
