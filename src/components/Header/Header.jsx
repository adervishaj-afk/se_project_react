import "./Header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleSignUp,
  handleSignIn,
  handleLogout,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

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
        {isLoggedIn && currentUser ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-button"
            >
              +Add Clothes
            </button>
            <button onClick={handleLogout} className="header__button">
              Logout
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.username}</p>
                <img
                  src={avatar}
                  alt={currentUser.username}
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
