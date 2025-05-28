import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import './searchBox.css'

export default function SearchBox({updateInfo}) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "4675f85976788b3a508fad880c2abd1e";

  let [city, setCity] = useState("");
  let [error , setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,       
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    }

    console.log(result);
    return result;
    } catch(err) {
      throw err;
    }
  }

  let handleInputChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
          event.preventDefault();
    console.log(city);
    setCity("");
    setError("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Submit
        </Button>
        {error && <p style={{color: "#ff1744"}}>No such Places</p>}
      </form>
    </div>
  );
}
