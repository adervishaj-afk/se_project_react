import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleEditProfile, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <img className="sidebar__avatar" src={avatar} alt="profile-avatar" />
        <p className="sidebar__username">Terrence Tegnene</p>
      </div>
      <button className="sidebar__edit" onClick={handleEditProfile}>
        Change Profile Data
      </button>
      <button onClick={handleLogout} className="sidebar__logout-button">
              Logout
            </button>
    </div>
  );
};

export default SideBar;
