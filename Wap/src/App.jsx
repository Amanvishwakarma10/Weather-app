import { useState } from "react";
import "./App.css";
import ForecastDisplay from "./ForecastDisplay";
import Display from "./Display";
const API_KEY = "a7d427f84839cea3f6b4ded0c6538248";
function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(null);
  const [forecastd, setforecastd] = useState(null);
  const forecast = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const fdata = await response2.json();

      if (data.cod === 200) {
        setweather(data);
        setforecastd(fdata);
      } else {
        setweather(null);
        alert("city not found");
        setforecastd(null);
        alert("Forecasted Data not found");
      }
    } catch (error) {
      console.error("unable to fetch ", error);
    }
  };
  return (
    <div>
      <h1>Weather Prediction!!</h1>

      <div id="container">
        <input
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          placeholder="Enter City"
        ></input>
        <br></br>
        <br />
        <button onClick={forecast}>search</button>
      </div>
      <div className="hello">
        {weather && <Display weather={weather}></Display>}
        {weather && <ForecastDisplay forecastd={forecastd}></ForecastDisplay>}
      </div>
    </div>
  );
}

export default App;
