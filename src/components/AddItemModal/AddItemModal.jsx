
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({closeActiveModal, onAddItem, isOpen}) => {
const [name, setName] = useState("");
const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
}

const [link, setUrl] = useState("");
const handleUrlChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({name, link})
}

return (
    <ModalWithForm
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
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
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="hot"
                name="weather"
                value="hot"
                required
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="warm"
                name="weather"
                value="warm"
                required
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="cold"
                name="weather"
                value="cold"
                required
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
)
}

export default AddItemModal; 
