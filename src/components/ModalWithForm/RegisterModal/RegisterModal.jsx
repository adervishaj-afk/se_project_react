import { Link } from "react-router-dom";
import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm";

const RegisterModal = ({
  handleRegistration,
  isOpen,
  handleSignIn,
  closeActiveModal,
}) => {
  // The inputs are controlled via a single piece of state: an object
  // object called `data`. This lets us avoid writing separate change
  // handlers for each input.
  const [data, setData] = useState({
    username: "",
    avatar: "",
    email: "",
    password: "",
  });

  // This function fires whenever an input is changed, and it updates
  // the value of the changed input. Note that the keys of this
  // object match the name attributes of the corresponding inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!data.username) newErrors.username = "Username is required";
  //   if (!data.avatar) newErrors.avatar = "Avatar URL is required";
  //   if (!data.email) newErrors.email = "Email is required";
  //   if (!data.password) newErrors.password = "Password is required";
  //   return newErrors;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const validationErrors = validateForm();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    handleRegistration(data);
    closeActiveModal();
  };

  return (
    // <div className={`modal ${isOpen && "modal_opened"}`}>
    //   <form className="register__form">
    //     <button
    //       onClick={closeActiveModal}
    //       className="register__form-close-btn"
    //       type="button"
    //     ></button>
    //     <p className="register__welcome">Sign Up</p>
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label className="register-label" htmlFor="email">
        Email *
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
        className="register-input"
        placeholder="Email"
        required
      />
      <label className="register-label" htmlFor="password">
        Password *
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
        className="register-input"
        placeholder="Password"
        required
      />
      <label className="register-label" htmlFor="username">
        Name *
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={data.username}
        onChange={handleChange}
        className="register-input"
        placeholder="Name"
        required
      />
      <label className="register-label" htmlFor="avatar">
        Avatar URL *{" "}
      </label>
      <input
        id="avatar"
        name="avatar"
        type="text"
        value={data.avatar}
        onChange={handleChange}
        className="register-input"
        placeholder="Avatar URL"
        required
      ></input>
      <div className="action-buttons">
        <div className="register__form-signup">
          <button
            type="submit"
            className="register__form-signup"
          >
            Sign up
          </button>
        </div>
        <div className="register__form-signin">
          <button onClick={handleSignIn} className="register__login-link">
            or Log in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
