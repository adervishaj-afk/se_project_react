import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card }) {
  //console.log(card)
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
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
