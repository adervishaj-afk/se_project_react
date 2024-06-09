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
      <div className="confirm-delete-modal">
        <button
          onClick={confirmModalClick}
          type="button"
          className="confirm-delete-modal__close"
        ></button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
