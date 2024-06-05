import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  getWeather,
  filterWeatherData,
  parseWeatherData,
} from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { api } from "../../utils/api.js";
//----------------------------------------------------------------//
//                        IMPORTS                                 //
//----------------------------------------------------------------//

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  //API call to weather database to store weather data properties in an object
  //Data is referenced by coordinates and special key accessed from
  //Weather data website
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  //API call to get items from database and render them to the front-end
  useEffect(() => {
    api
      .getItems()
      .then((data) => {
        //console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  //NEEDS WORK / IMPLEMENT API CALL
  const onAddItem = (itemData) => {
    api
      .addItem(itemData)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
      })
      .catch(console.error);
    closeActiveModal();
  };

  const handleDeleteCard = (selectedCard) => {
    api
      .removeItem(selectedCard._id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((card) => selectedCard._id !== card._id)
        );
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTempUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey).then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            temp={temp}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  weatherTemp={temp}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  handleDeleteCard={handleDeleteCard}
                  clothingItems={clothingItems}
                  onAddItem={onAddItem}
                  closeActiveModal={closeActiveModal}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  weatherTemp={temp}
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleDeleteCard={handleDeleteCard}
                  onAddItem={onAddItem}
                  closeActiveModal={closeActiveModal}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        {activeModal === "add-garment" && (
          <AddItemModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            activeModal={"preview"}
            card={selectedCard}
            onClose={closeActiveModal}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
