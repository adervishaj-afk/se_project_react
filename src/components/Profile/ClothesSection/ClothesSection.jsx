import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";


const ClothesSection = ({handleCardClick}) => {
    return (
      <div className="clothes-section">
        <div className="clothes-section__features">
            <p className="clothes-section__title">YOUR ITEMS</p>
            <button className="clothes__button">+ Add New</button>
        </div>
        <ul className="clothes-section__items">
          {defaultClothingItems
            .map((item, index) => (
              <ItemCard
                key={item._id || index}
                item={item}
                handleCardClick={handleCardClick}
              />
            ))}
        </ul>
      </div>
    );
  };

  export default ClothesSection;