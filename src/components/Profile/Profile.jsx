import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({
  weatherTemp,
  weatherData,
  clothingItems,
  handleCardClick,
  handleDeleteCard,
  onAddItem,
}) => {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <img src="" alt="" />
        <p className="profile__name"></p>
        <Sidebar />
      </section>
      <section className="profile-clothes">
        <ClothesSection handleCardClick={handleCardClick} handleDeleteCard={handleDeleteCard} />
      </section>
    </div>
  );
};

export default Profile;
