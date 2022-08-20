
import React from "react";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data)
    }
    let apiKey = "782df830409de05606e0bff5e5fa62dd";
    let longitude = props.coord.lon;
    let latitude= props.coord.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
    return (
        
        <div className="WeatherForecast">
<div className="row">
    <div className="col">
        <div className="WeatherForecast-day">Thur</div>
        <div className="WeatherForecast-icon"> icon</div>
        <div className="Weatherforecast-temperature">
            <span className="Weatherforecast-temperature-max">
19
            </span>
            <span className="WeatherForecast-temperature-min">
11
            </span>
        </div>
    </div>

</div>
        </div>
    )
}