import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { api } from "../../utils/api.js";
import RegisterModal from "../ModalWithForm/RegisterModal/RegisterModal.jsx";
import LoginModal from "../ModalWithForm/LoginModal/LoginModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import { auth } from "../../utils/auth.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    avatar: "",
    email: "",
    name: "",
  });
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleCardLike = (item, isLiked) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked

    const id = item._id;

    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike({ id, token })
          .then((updatedCard) => {
            //debugger;
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike({ id, token })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    // Call the function, passing it the JWT.
    api
      .getUserInfo(token)
      .then(({ _id, username, name, email, avatar }) => {
        // If the response is successful, log the user in, save their
        // data to state, and navigate them to /profile.
        setIsLoggedIn(true);
        setUserData({ _id, username, name, email, avatar });
        navigate("/profile");
      })
      .catch(console.error);
  }, [isLoggedIn]);

  const handleRegistration = ({ username, avatar, email, password }) => {
    auth
      .signup(username, avatar, email, password)
      .then(() => {
        //handleLogin({ username: data.username, password: data.password });
        //navigate("/profile");
        setActiveModal("sign-in");
      })
      .catch(console.error);
  };

  const handleLogin = ({ username, password }) => {
    // If username or password empty, return without sending a request.
    if (!username || !password) {
      return;
    }

    auth
      .signin(username, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/profile");
        }
      })
      .catch(console.error);
  };

  const handleProfileUpdate = ({ name, avatar }) => {
    const token = getToken();
    api
      .editProfile({ name, avatar, token })
      .then((data) => {
        setUserData(data);
        closeActiveModal();
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleEditProfile = () => {
    setActiveModal("edit-profile");
  };

  const handleSignUp = () => {
    setActiveModal("sign-up");
  };

  const handleSignIn = () => {
    setActiveModal("sign-in");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const confirmDeleteModal = () => {
    setActiveModal("confirm-delete");
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
        const temperature = parseWeatherData(data);
        setTemp(temperature);
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

  const onAddItem = ({ name, weather, imageUrl }) => {
    const token = getToken();
    if (!token) return;

    api
      .addItem({ name, weather, imageUrl, token })
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteCard = (selectedCard) => {
    const token = getToken();
    if (!token) return;

    api
      .removeItem(selectedCard._id, token)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((card) => selectedCard._id !== card._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTempUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTempUnit("C");
  };

  return (
    <CurrentUserContext.Provider value={{ userData }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              temp={temp}
              weatherData={weatherData}
              handleSignUp={handleSignUp}
              handleSignIn={handleSignIn}
              isLoggedIn={isLoggedIn}
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
                    onCardLike={handleCardLike}
                    isLiked={isLiked}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      weatherTemp={temp}
                      weatherData={weatherData}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleDeleteCard={handleDeleteCard}
                      onAddItem={onAddItem}
                      closeActiveModal={closeActiveModal}
                      handleAddClick={handleAddClick}
                      handleEditProfile={handleEditProfile}
                      handleLogout={handleLogout}
                      isLoggedIn={isLoggedIn}
                      onCardLike={handleCardLike}
                      isLiked={isLiked}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? <Navigate to="/" /> : <Navigate to="/profile" />
                }
              />
            </Routes>

            <Footer />
          </div>
          {activeModal === "sign-up" && (
            <RegisterModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "sign-up"}
              handleRegistration={handleRegistration}
              handleSignIn={handleSignIn}
            />
          )}
          {activeModal === "sign-in" && (
            <LoginModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "sign-in"}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
            />
          )}
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
              handleDeleteCard={handleDeleteCard}
              confirmDeleteModal={confirmDeleteModal}
              isLoggedIn={isLoggedIn}
            />
          )}
          {activeModal === "confirm-delete" && (
            <ConfirmDeleteModal
              isOpen={activeModal === "confirm-delete"}
              card={selectedCard}
              closeActiveModal={closeActiveModal}
              confirmDeleteModal={confirmDeleteModal}
              handleDeleteCard={handleDeleteCard}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal
              isOpen={activeModal === "edit-profile"}
              closeActiveModal={closeActiveModal}
              handleProfileUpdate={handleProfileUpdate}
              //editProfile={handleEditProfile}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
