import { useState } from "react";
import "./EditProfileModal.css";

const EditProfileModal = ({
  handleProfileUpdate,
  isOpen,
  closeActiveModal,
}) => {
  const [data, setData] = useState({
    username: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileUpdate(data);
    closeActiveModal();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <form className="edit__form">
        <p className="edit__form-title">Change Profile Data</p>
        <button
          onClick={closeActiveModal}
          className="edit__form-close-btn"
          type="button"
        ></button>
        <label htmlFor="username" className="edit-label">
          Name *
        </label>
        <input
          id="name"
          required
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
          className="edit-input"
          placeholder="Name"
        />
        <label htmlFor="avatar" className="edit-label">
          Avatar *
        </label>
        <input
          id="avatar"
          required
          name="avatar"
          type="text"
          value={data.avatar}
          onChange={handleChange}
          className="edit-input"
          placeholder="Avatar URL"
        />
        <div>
          <div className="button-container">
            <button
              onClick={handleSubmit}
              className="edit-button"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfileModal;
