import "./Header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";

function Header({handleAddClick}) {
  return (
    <header className="header">
      <img className="header__logo" alt="header-logo" src={logo} />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
