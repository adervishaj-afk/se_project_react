import React, { useState } from "react";
// import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
// import currTempContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const [currentTempUnit, handleToggleSwitch] = useState("C");

  const handleChange = () => {
    if (currentTempUnit === "C") handleToggleSwitch("F");
    if (currentTempUnit === "F") handleToggleSwitch("C");
  };
  // const [confirm, setConfirm] = useState(currentTempUnit === "C");
  // useEffect(() => setConfirm(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch__checkbox"
          type="checkbox"
          name="toggle-switch-checkbox"
          onChange={handleChange}
        ></input>
        <span
          className={
            currentTempUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTempUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTempUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
