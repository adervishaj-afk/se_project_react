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
    email: "",
  });
  const [profile, setProfile] = useState({ username: "", avatar: "" });
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
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
      .then(({ _id, username, email }) => {
        // If the response is successful, log the user in, save their
        // data to state, and navigate them to /profile.
        setIsLoggedIn(true);
        setUserData({ _id, username, email });
        navigate("/profile");
      })
      .catch(console.error);
  }, [isLoggedIn]);

  const handleRegistration = ({ username, avatar, email, password }) => {
    api
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

    api
      .signin(username, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          navigate("/profile");
        }
      })
      .catch(console.error);
  };

  const handleProfileUpdate = ({ username, avatar }) => {
    if (!username || avatar) {
      return;
    }
    const token = getToken();
    api
      .editProfile({ username, avatar, token })
      .then(() => {})
      .catch(console.error);
  };
  // const handleUserInfo = () => {
  //   api
  //     .getUserInfo()
  //     .then((data) => {
  //       setIsLoggedIn(true);
  //       //setUserData({ name: data.username, email: data.email });
  //       navigate("/profile");
  //     })
  //     .then((data) => {
  //       getUserData(data);
  //     })
  //     .catch(console.error);
  // };

  // const getUserData = (data) => {
  //   api.getUserInfo(data.token);
  // };

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
    <CurrentUserContext.Provider value={userData}>
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
              handleLogout={handleLogout}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  //<ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Main
                    weatherTemp={temp}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    handleDeleteCard={handleDeleteCard}
                    clothingItems={clothingItems}
                    onAddItem={onAddItem}
                    closeActiveModal={closeActiveModal}
                    onCardLike={handleCardLike}
                  />
                  //</ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      userData={userData}
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
            />
          )}
          {activeModal === "sign-in" && (
            <LoginModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "sign-in"}
              handleLogin={handleLogin}
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
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
