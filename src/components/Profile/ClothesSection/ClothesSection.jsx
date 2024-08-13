import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";
import React from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const ClothesSection = ({
  handleCardClick,
  handleDeleteCard,
  clothingItems,
  handleAddClick,
  onCardLike,
  isLoggedIn,
  isLiked,
}) => {
  const { userData } = React.useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__features">
        <p className="clothes-section__title">YOUR ITEMS</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes__button"
        >
          + Add New
        </button>
      </div>

      {isLoggedIn ? (
        <ul className="clothes-section__items">
          {clothingItems
            .filter((item) => item.owner == userData._id)
            .map((item, index) => (
              <ItemCard
                key={item._id || index}
                item={item}
                onCardClick={handleCardClick}
                handleDeleteCard={handleDeleteCard}
                onCardLike={onCardLike}
                isLiked={isLiked}
                isLoggedIn={isLoggedIn}
              />
            ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClothesSection;
