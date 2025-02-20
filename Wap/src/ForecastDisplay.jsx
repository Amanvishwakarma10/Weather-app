import React from "react";
import "./forecast.css";
const ForecastDisplay = ({ forecastd }) => {
  const daily = forecastd.list.filter((_, index) => index % 8 === 0);
  return (
    <div>
      <h1>DailyForecast</h1>
      <div id="container2">
        {daily.map((day) => (
          <div id="border1" key={day.dt}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>

            <p>{day.main.temp}</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
