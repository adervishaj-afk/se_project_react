import "./ItemCard.css";

function ItemCard({ item, onCardClick, handleDeleteCard, confirmDeleteClick, activeModal }) {
  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(item);
  };

  const deleteCard = (e) => {
    e.preventDefault();
    handleDeleteCard(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
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
