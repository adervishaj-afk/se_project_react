import "./ItemModal.css";
import { useState } from "react";

function ItemModal({
  activeModal,
  onClose,
  card,
  handleDeleteCard,
  confirmDeleteModal,
  isOpen,
}) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content-items">
        <button
          onClick={onClose}
          type="button"
          className="modal__item-close"
        ></button>
        <img src={card.imageUrl} alt="card image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            type="button"
            onClick={confirmDeleteModal}
            className="delete-card"
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
