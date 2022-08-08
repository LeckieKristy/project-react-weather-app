import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.main);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city...."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}></FormattedDate></li>
          <li className="text-uppercase">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.icon} alt="Cloudy" className="float-left" />
              <div className="WeatherTemperature">
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} Km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a16f20b5b1975498f29ae71008574cdb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading....";
}
