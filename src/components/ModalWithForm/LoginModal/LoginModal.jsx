import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ handleLogin, isOpen, closeActiveModal }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
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
    handleLogin(data);
    closeActiveModal();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <form className="signin__form">
        <p className="signin-form__title">Log in</p>
        <button
          onClick={closeActiveModal}
          className="signin__form-close-btn"
          type="button"
        ></button>
        <label htmlFor="username" className="signin-label">
          Email
        </label>
        <input
          id="username"
          required
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
          className="signin-input"
          placeholder="Email"
        />
        <label htmlFor="password" className="signin-label">
          Password
        </label>
        <input
          id="password"
          required
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="signin-input"
          placeholder="Password"
        />
        <div>
          <div className="button-container">
            <button onClick={handleSubmit} className="signin-button" type="submit">
              Log in
            </button>
            <div className="login__signup">
              {/* requires fixing */}
              <button>or Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
