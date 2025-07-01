import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 39.98,
    humidity: 25,
    temp_min: 39.98,
    temp_max: 39.98,
    feels_like: 41.05,
    weather: "haze",
  });

  let updateInfo = (info) => {
    setWeatherInfo(info);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        Weather App by{" "}
        <small>
          <i>kshitij sonii</i>
        </small>
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
