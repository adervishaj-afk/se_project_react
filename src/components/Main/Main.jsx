import { useMemo, useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weatherTemp,
  weatherData,
  handleCardClick,
  clothingItems, 
  onAddItem,
  handleDeleteCard,
}) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTempUnit] || 999;

  const weatherType = useMemo(() => {
    if (temp > 86) {
      return "hot";
    } else if (temp >= 66 && temp < 86) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherTemp]);

  return (
    <main>
      <WeatherCard weatherData={weatherData} weatherTemp = {temp} />
      <section className="cards">
        <p className="card__text">
          Today is {temp}°F / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems.filter((item) => item.weather && item.weather.toLowerCase() === weatherType.toLowerCase())
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                handleDeleteCard={handleDeleteCard}
                onAddItem={onAddItem}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
