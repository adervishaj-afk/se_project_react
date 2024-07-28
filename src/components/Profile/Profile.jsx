import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection";
//import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

const Profile = ({
  clothingItems,
  handleCardClick,
  handleDeleteCard,
  handleAddClick,
  onCardLike,
  handleEditProfile,
  handleLogout,
  isLoggedIn,
  isLiked,
  userData
  
}) => {
  //const { username, email } = userData;
  return (
    <div className="profile">
      <section className="profile__sidebar">
        {/* <img src="" alt="" /> 
        <p className="profile__name"></p> */}
        <SideBar 
        handleEditProfile={handleEditProfile}
        handleLogout={handleLogout}
        userData={userData}
        />
      </section>
      <section className="profile-clothes">
        <ClothesSection
          handleCardClick={handleCardClick}
          handleDeleteCard={handleDeleteCard}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
          isLiked={isLiked}
          userData={userData}
        />
      </section>
    </div>
  );
};

export default Profile;
