import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    //console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleTempChange = (e) => {
    //console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather: selectedOption, imageUrl: link });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          value={link}
          onChange={handleUrlChange}
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the Weather Type: </legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            id="hot"
            onChange={handleTempChange}
            required
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            id="warm"
            onChange={handleTempChange}
            required
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            id="cold"
            onChange={handleTempChange}
            required
          />
          Cold
        </label>
      </fieldset>
      <div>
        <button className="add-button" type="submit">
          Add Item
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
