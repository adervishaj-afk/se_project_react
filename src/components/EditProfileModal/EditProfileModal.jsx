import React, { useContext, useEffect, useState } from "react";
import "./EditProfileModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  handleProfileUpdate,
  isOpen,
  closeActiveModal,
}) => {
  const { userData } = React.useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (userData) {
      setData(userData);
      //debugger;
    }
  }, []);

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
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="edit-label">
        Name *
      </label>
      <input
        id="name"
        required
        name="name"
        type="text"
        value={data.name}
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
        <button className="edit-button" type="submit">
          Save Changes
        </button>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
