import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const dailyForcast = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
console.log(weatherData)
  let weatherOption;
  if (dailyForcast) {
    weatherOption = weatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = defaultWeatherOptions
  }

  // console.log(weatherData)
  console.log(weatherOption)
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}°F</p>
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
