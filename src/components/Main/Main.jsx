import { useMemo, useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, handleCardClick, clothingItems, onAddItem, handleDeleteCard }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTempUnit)
  const weatherType = useMemo(() => {
    if (weatherData.temp > 86) {
      return "hot";
    } else if (weatherData.temp >= 66 && weatherData.temp < 86) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherData.temp]);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="card__text">
          Today is {weatherData.temp.F}°F / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems //clothingItems from API call from getItems
            .filter((item) => item.weather === weatherType)
            .map((item, index) => (
              <ItemCard
                key={item._id || index}
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
