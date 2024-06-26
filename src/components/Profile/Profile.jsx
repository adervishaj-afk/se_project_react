import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection";
//import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

const Profile = ({
  weatherTemp,
  weatherData,
  clothingItems,
  handleCardClick,
  handleDeleteCard,
  onAddItem,
  handleAddClick,

}) => {

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <img src="" alt="" />
        <p className="profile__name"></p>
        <SideBar />
      </section>
      <section className="profile-clothes">
        <ClothesSection
          handleCardClick={handleCardClick}
          handleDeleteCard={handleDeleteCard}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
};

export default Profile;
