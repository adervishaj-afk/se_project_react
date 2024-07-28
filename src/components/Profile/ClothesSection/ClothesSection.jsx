import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";
import React, { useContext } from "react";

const ClothesSection = ({
  handleCardClick,
  handleDeleteCard,
  clothingItems,
  handleAddClick,
  onCardLike,
  isLoggedIn,
  isLiked,
  userData,
}) => {

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
          {clothingItems.map((item, index) => (
            <ItemCard
              key={item._id || index}
              item={item}
              onCardClick={handleCardClick}
              handleDeleteCard={handleDeleteCard}
              onCardLike={onCardLike}
              isLiked={isLiked}
              userData={userData}
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
