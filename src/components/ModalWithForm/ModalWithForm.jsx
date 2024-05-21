import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  isOpen //onSubmit
}) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const newCard = {
  //     name: formData.get("name"),
  //     imageUrl: formData.get("imageUrl"),
  //     weather: formData.get("weather"),
  //   };
  //   onSubmit(newCard);
  // };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__form-close"
        ></button>
        <form
          className="modal__form" //onSubmit={handleSubmit}
        >
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
