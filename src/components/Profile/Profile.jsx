import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({handleCardClick}) => {
  return (
  <div className="profile">
    <section className="profile__sidebar">
      <img src="" alt="" />
      <Sidebar />
    </section>
    <section className="profile-clothes">
      <ClothesSection handleCardClick={handleCardClick}/>
    </section>
    <p>PROFILE</p>
  </div>
  )
};

export default Profile;
