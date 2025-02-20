import React from "react";
const Display = ({ weather }) => {
  return (
    <>
      <div>
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
        <h2>{weather.weather[0].description}</h2>
        <h2>
          {weather.main.temp} C <br />
        </h2>
        <h2>Humidity {weather.main.humidity}</h2>
      </div>
    </>
  );
};

export default Display;
