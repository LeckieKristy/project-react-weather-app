import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return( <div> <h1>{props.data.city}</h1>
    <ul>
      <li><FormattedDate date={props.data.date}></FormattedDate></li>
      <li className="text-uppercase">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img src={props.data.icon} alt="Cloudy" className="float-left" />
          <div className="WeatherTemperature">
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} Km/hr</li>
        </ul>
      </div>
      </div>
      </div>
);
}