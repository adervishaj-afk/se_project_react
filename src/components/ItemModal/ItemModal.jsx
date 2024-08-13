import "./ItemModal.css";
// import { useContext } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  onClose,
  card,
  confirmDeleteModal,
  isLoggedIn,
}) {
  // const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  // const isOwn = card.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  // const itemDeleteButtonClassName = `delete-card ${
  //   isOwn ? "delete-card_visible" : "delete-card_hidden"
  // }`;

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
          {isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={confirmDeleteModal}
                className="delete-card" //itemDeleteButtonClassName
              >
                Delete Card
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
