import React, { useState } from "react";
import space from "../images/space1.jpg";

export default function Weather() {
  const [cityName, setcityName] = useState("");
  const [countryName, setcountryName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("");
  const [temp, setTemp] = useState("");
  const [feels_like, setFeels_like] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [temp_max, setTemp_max] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [nameCT, setNameCT] = useState("");
  const [nameCTR, setNameCTR] = useState("");
  const [timezone, setTimezone] = useState("");
  const [main, setMain] = useState("");
  const [wind_deg, setWind_deg] = useState("");
  const [wind_speed, setWind_speed] = useState("");
  const [hide, setHide] = useState("hidden");

  const getWeather = async () => {
    const apiKey = "2b1bb1bf3a6f3981850ea651f36344e9";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${apiKey}`;
    try {
      const data = await (await fetch(apiCall)).json();
      setDescription(data.weather[0].description);
      setVisibility(data.visibility);
      setTemp(converTemp(data.main.temp));
      setFeels_like(converTemp(data.main.feels_like));
      setHumidity(data.main.humidity);
      setPressure(data.main.pressure);
      setTemp_max(converTemp(data.main.temp_max));
      setTemp_min(converTemp(data.main.temp_min));
      setNameCT(data.name);
      setNameCTR(data.sys.country);
      setTimezone(data.timezone);
      setMain(data.weather[0].main);
      setWind_deg(data.wind.deg);
      setWind_speed(data.wind.speed);
      setHide("visible");
    } catch {
      alert("City , Country not Found!!!");
    }
  };

  const converTemp = (tempK) => {
    return (tempK - 273.15).toFixed(2);
  };

  return (
    <div
      className="Weather"
      style={{
        height: "100%",
        backgroundImage: `url(${space})`,
        color: "white",
      }}
    >
      <br />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <div style={{ height: "20%" }}></div>
          <form>
            <div className="form-group">
              <label htmlFor="CityName">City Name</label>
              <input
                type="text"
                className="form-control"
                id="CityName"
                placeholder="Enter City Name"
                onChange={(event) => {
                  setcityName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="CountryName">Country Name</label>
              <input
                type="text"
                className="form-control"
                id="CountryName"
                placeholder="Enter Country Name"
                onChange={(event) => setcountryName(event.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={getWeather}
            >
              Get Weather
            </button>
          </form>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <h3 style={{ visibility: hide }}>nameCT: {nameCT}</h3>
          <h3 style={{ visibility: hide }}>nameCTR: {nameCTR}</h3>
          <h3 style={{ visibility: hide }}>main: {main}</h3>
          <h3 style={{ visibility: hide }}>Description: {description}</h3>
          <h3 style={{ visibility: hide }}>temp: {temp} °C</h3>
          <h3 style={{ visibility: hide }}>feels_like: {feels_like} °C</h3>
          <h3 style={{ visibility: hide }}>temp_max: {temp_max} °C</h3>
          <h3 style={{ visibility: hide }}>temp_min: {temp_min} °C</h3>
          <h3 style={{ visibility: hide }}>visibility: {visibility}</h3>
          <h3 style={{ visibility: hide }}>humidity: {humidity}</h3>
          <h3 style={{ visibility: hide }}>pressure: {pressure}</h3>
          <h3 style={{ visibility: hide }}>timezone: {timezone}</h3>
          <h3 style={{ visibility: hide }}>wind_deg: {wind_deg}</h3>
          <h3 style={{ visibility: hide }}>wind_speed: {wind_speed}</h3>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
