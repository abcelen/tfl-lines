import React, { useState, useEffect } from "react";
import Route from "./Routes";

const ModeSelected = (props) => {
  const [line, setLine] = useState([]);
  const [selectedLine, setSelectedLine] = useState([]);

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selectedMode}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLine(data);
      });
  }, [props.selectedMode]);

  const handleSelectedLine = (event) => {
    // console.log(e);
    setSelectedLine(event.target.value);
  };

  return line.length > 0 ? (
    <div className="row">
      <select
        className="btn btn-primary dropdown-toggle"
        onChange={handleSelectedLine}
      >
        <option>Choose a Line </option>
        {line.map((item, index) => {
          return (
            <option key={index} value={item.name}>
              {item.id}
            </option>
          );
        })}
      </select>

      <Route selectedLine={selectedLine} />
    </div>
  ) : (
    <p style={{ color: "red" }}>No lines on this mode</p>
  );
};
export default ModeSelected;
