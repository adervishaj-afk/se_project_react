import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({
  activeModal,
  onClose,
  isOpen,
  onSubmit,
  handleDeleteCard,
  confirmDeleteModal,
}) {
  const confirmModalClick = (e) => {
    e.preventDefault();
    //console.log(item);
    confirmDeleteModal(item);
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content-form">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={confirmModalClick}
          type="button"
          className="modal__form-close"
        ></button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
