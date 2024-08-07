import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection";

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
}) => {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        {/* <img src="" alt="" /> 
        <p className="profile__name"></p> */}
        <SideBar
          handleEditProfile={handleEditProfile}
          handleLogout={handleLogout}
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
        />
      </section>
    </div>
  );
};

export default Profile;
