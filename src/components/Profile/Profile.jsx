import "./Profile.css";

const Profile = ({ cards, onCardClick, onCardDelete, onAddNewCard }) => {
  <div className="profile">
    <section className="profile-sidebar">
      <Sidebar />
    </section>
    <section className="profile-clothes">
      <ClothesSection
        sectionData={cards}
        onAddNewCard={onAddNewCard}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
      />
    </section>
  </div>;
};

export default Profile;
