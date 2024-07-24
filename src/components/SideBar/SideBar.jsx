import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="profile-avatar" />
      <p className="sidebar__username">Terrence Tegnene</p>
    </div>
  );
};

export default SideBar;
