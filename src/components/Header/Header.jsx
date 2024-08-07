import "./Header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleSignUp,
  handleSignIn,
  isLoggedIn,
}) {
  const { userData } = React.useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
        </Link>
      </div>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__add">
        <ToggleSwitch />
        {isLoggedIn && userData ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-button"
            >
              +Add Clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{userData.name}</p>
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        ) : (
          <>
            <button onClick={handleSignUp} className="header__sign-up">
              Sign Up
            </button>
            <button onClick={handleSignIn} className="header__sign-in">
              Sign In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
