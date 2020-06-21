import React, { useState, useEffect } from "react";
import ModeSelected from "./components/ModeSelected";
import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        setModes(data);
      });
  }, []);
  const handleSelectedMode = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div className="container">
      <div className="App-header">
        <img
          src="https://www.kcwtoday.co.uk/wp-content/uploads/2020/05/TFL-Image-808x454.jpg"
          alt="header"
        />
        <h1>Line Information</h1>
      </div>
      <div className="container">
        <div className="row">
          <select
            className="btn btn-primary dropdown-toggle"
            onChange={handleSelectedMode}
          >
            <option>Choose a Transport</option>
            {modes.map((modes, index) => {
              return (
                <option key={index} value={modes.modeName}>
                  {modes.modeName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="row">
          <p className="alert alert-primary">
            Your selected mode is: <strong> {selectedMode}</strong>
          </p>
        </div>
        {selectedMode && <ModeSelected selectedMode={selectedMode} />}
      </div>
    </div>
  );
}

export default App;
