import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="Container">
        <h1>Weather App</h1>
        <button className="btn btn-primary"> BUTTON</button>
        <footer>
          This project was coded by Kristy Leckie and is {""}{" "}
          <a
            href="https://github.com/LeckieKristy"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
