import { useMemo, useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weatherOption,
  weatherData,
  handleCardClick,
  clothingItems, 
  onAddItem,
  handleDeleteCard,
}) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTempUnit)
  console.log(clothingItems);
  const weatherType = useMemo(() => {
    //debugger;
    if (weatherData.temp.F > 86) {
      return "hot";
    } else if (weatherData.temp.F >= 66 && weatherData.temp.F < 86) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherData.temp.F]);

  console.log({weatherType});
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="card__text">
          Today is {weatherData.temp.F}°F / You may want to wear:
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
