import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({
  closeActiveModal,
  isOpen,
  onSubmit,
  handleDeleteCard,
  confirmDeleteModal,
  card,
}) {
  const closeConfirmModal = (e) => {
    closeActiveModal();
  };

  const deleteCard = (e) => {
    e.preventDefault();
    handleDeleteCard(card);
    closeConfirmModal();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="confirm-delete-modal">
        <div className="confirm-delete-modal__desc">
          <p>Are you sure you want to delete this item?</p>
          <p>This action is irreversible</p>
          <button
            onClick={deleteCard}
            type="submit"
            className="confirm-delete-modal__close"
          >
            Yes, delete item
          </button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
