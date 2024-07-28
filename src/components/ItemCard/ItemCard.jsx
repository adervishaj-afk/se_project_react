import "./ItemCard.css";
import React, { useContext } from "react";

function ItemCard({
  item,
  onCardClick,
  handleDeleteCard,
  confirmDeleteClick,
  activeModal,
  onCardLike,
  userData,
}) {
  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(item);
  };

  // Check if the item was liked by the current user
  // The likes array should be an array of ids

  const isLiked = item.likes.some((id) => id === userData._id);
  //console.log("userdata id", userData._id)

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = isLiked
    ? "card__like-button-active"
    : "card__like-button";

  const handleLikeClick = (e) => {
    e.preventDefault();
    console.log("handleLikeClick called with:", { id: item._id, isLiked });
    onCardLike(item);
    //debugger;
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={itemLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
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
