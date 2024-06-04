import "./Sidebar.css";
import avatar from "../../../assets/avatar.svg";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img
        className="sidebar__avatar"
        src={avatar} alt="profile-avatar"
      />
      <p className="sidebar__username">User name</p>
    </div>
  );
};

export default Sidebar;
