import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../ItemCard/ItemCard";


const ClothesSection = () => {
    return (
      <div className="Clothes-section">
        <div>
            <p>YOUR ITEMS</p>
            <button>Add New +</button>
        </div>
        <ul className="cards__list">
          {defaultClothingItems
            .map((item, index) => (
              <ItemCard
                key={item._id || index}
                item={item}
                //TO DO -- Pass as prop 
                // onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </div>
    );
  };

  export default ClothesSection;