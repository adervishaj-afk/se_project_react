import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({
  handleCardClick,
  handleDeleteCard,
  clothingItems,
  handleAddClick,
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
      <ul className="clothes-section__items">
        {clothingItems.map((item, index) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
