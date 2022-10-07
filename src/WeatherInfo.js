import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return( 
      
      
    <div className="WeatherInfo"> <h1>{props.data.city}</h1>
    <ul>
      <li className="text-center"><FormattedDate date={props.data.date}></FormattedDate></li>
    </ul>
    
   
    <div className="row mt-3 ">
      <div className="col-md-12">
              
         <span className="WeatherTemperature">
             <WeatherTemperature celsius={props.data.temperature} />
         </span>
         
            
        </div>


      <div className="col-md-12">
        <ul>
          <li className="mb-3"><WeatherIcon code={props.data.icon} /></li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} Km/hr</li>
          <li>{props.data.description}</li>
        </ul>
        <br />
      </div>
      </div>
      </div>
);
}