import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props) {
  const [city,setCity]= useState(props.defaultCity)
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

  }
  function search(){

    const apiKey = "a16f20b5b1975498f29ae71008574cdb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit (event){
    event.preventDefault();
    search();
  }

  function handleCityChange (event){
setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          
          <div className="row">
            <div className="col-9">
              <input 
              onChange={handleCityChange}
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

        <WeatherInfo data={weatherData}/>
       
        </div>
      
    );
  }
  else{
  search();
  return "Loading....";}
}
