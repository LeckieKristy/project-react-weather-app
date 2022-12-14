import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        
        <Weather defaultCity="Wawanesa" />
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
