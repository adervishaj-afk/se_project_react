import "./ItemCard.css";

function ItemCard({
  item,
  onCardClick,
  handleDeleteCard,
  confirmDeleteClick,
  activeModal,
  onCardLike,
}) {
  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(item);
  };

  // Check if the item was liked by the current user
  // The likes array should be an array of ids

  //const isLiked = item.likes.some((id) => id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `...`;

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button className="card__like-button"></button>
      </div>
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
