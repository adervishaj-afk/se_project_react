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
  isLiked,
  handleDeleteCard,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  return (
    <main>
      <WeatherCard weatherData={weatherData} weatherTemp={temp} />
      <section className="cards">
        <p className="card__text">
          Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter(
              (item) =>
                item.weather &&
                item.weather.toLowerCase() === weatherData.type.toLowerCase()
            )
            .map((item, index) => (
              <ItemCard
                key={item._id || index}
                item={item}
                onCardClick={handleCardClick}
                handleDeleteCard={handleDeleteCard}
                onCardLike={onCardLike}
                isLiked={isLiked}
                isLoggedIn={isLoggedIn}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
