import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({ cards, onCardClick, onCardDelete, onAddNewCard }) => {
  return (
  <div className="profile">
    <section className="profile__sidebar">
      <img src="" alt="" />
      <Sidebar />
    </section>
    <section className="profile-clothes">
      <ClothesSection />
    </section>
    <p>PROFILE</p>
  </div>
  )
};

export default Profile;
