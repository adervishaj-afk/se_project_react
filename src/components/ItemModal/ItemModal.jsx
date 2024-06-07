import "./ItemModal.css";
import { useState } from "react";

function ItemModal({ activeModal, onClose, card }) {
  //console.log(card)

  const [showConfirmation, setShowConfirmation] = useState(false);
  

  // const deleteCard = (e) => {
  //   e.preventDefault();
  //   handleDeleteCard(item);
  // };

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content-items modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__item-close"
        ></button>
        <img src={card.imageUrl} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button type="button"
        //onClick={deleteCard}
        className="delete-card">Delete Card</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
