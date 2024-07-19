import { Link } from "react-router-dom";
import { useState } from "react";
import "./RegisterModal.css";

const RegisterModal = ({ handleRegistration, isOpen, closeActiveModal }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
    closeActiveModal();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <form className="register__form">
        <button
          onClick={closeActiveModal}
          className="register__form-close-btn"
          type="button"
        ></button>
        <p className="register__welcome">Sign Up</p>
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
        ></input>
        <div className="action-buttons">
          <div className="register__form-signup">
            <button
              onClick={handleSubmit}
              type="submit"
              className="register__form-signup"
            >
              Sign up
            </button>
          </div>
          <div className="register__form-signin">
            {/* requires fixing */}
            <button onClick={handleSubmit} className="register__login-link">
              or Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
