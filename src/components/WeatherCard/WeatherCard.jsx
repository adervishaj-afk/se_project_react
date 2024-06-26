import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { useContext } from "react";

function WeatherCard({ weatherData, weatherTemp }) {

  // subscribe to context
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  
  const dailyForcast = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  //console.log(weatherData);
  let weatherOption;
  if (dailyForcast) {
    weatherOption = dailyForcast;
  } else {
    weatherOption = weatherData.isDay ? defaultWeatherOptions.day : defaultWeatherOptions.night;
  }

  // console.log(dailyForcast)
  // console.log(dailyForcast[weatherData.isDay ? "day" : "night"])
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherTemp}°{currentTemperatureUnit}</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${
          defaultWeatherOptions?.day ? "day" : "night"
        } time `}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
