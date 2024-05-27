import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const dailyForcast = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  console.log(weatherData);
  let weatherOption;
  if (dailyForcast) {
    weatherOption = dailyForcast;
  } else {
    weatherOption = defaultWeatherOptions;
  }

  // console.log(dailyForcast)
  // console.log(dailyForcast[weatherData.isDay ? "day" : "night"])
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
