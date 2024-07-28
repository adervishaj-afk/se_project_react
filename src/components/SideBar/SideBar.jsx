import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import React, { useContext } from "react";

const SideBar = ({ handleEditProfile, handleLogout, userData }) => {
  //console.log("userdata", userData);

  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <img
          className="sidebar__avatar"
          src={userData.avatar}
          alt="profile-avatar"
        />
        <p className="sidebar__username">{userData.name}</p>
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
