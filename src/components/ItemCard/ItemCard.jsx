import "./ItemCard.css";

function ItemCard({ item, onCardClick, handleDeleteCard }) {
  const handleCardClick = (e) => {
    e.preventDefault();
    console.log(item)
    onCardClick(item);
  };

  const handleCardDelete = (e) => {
    e.preventDefault();
    handleDeleteCard(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <button 
        type = "button"
        className="card__delete-button"
        onClick={handleCardDelete}
        />
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl || item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
