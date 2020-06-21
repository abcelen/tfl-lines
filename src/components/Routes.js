import React, { useState, useEffect } from "react";

const Route = (props) => {
  const [selectedRoute, setSelectedRoute] = useState({});
  //   console.log(props.selectedLine);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${props.selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSelectedRoute(data);
      });
  }, [props.selectedLine]);
  console.log(selectedRoute.routeSections);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <svg
              class="bi bi-arrow-right-circle-fill"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"
              />
            </svg>
            <p>
              {selectedRoute.routeSections && selectedRoute.routeSections[0]
                ? selectedRoute.routeSections[0].originationName
                : null}
            </p>
          </div>
        </div>

        <div className="col-6">
          <div className="card">
            <svg
              class="bi bi-x-circle-fill"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
              />
            </svg>
            <p>
              {selectedRoute.routeSections && selectedRoute.routeSections[0]
                ? selectedRoute.routeSections[0].destinationName
                : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Route;
