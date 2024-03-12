// InputField.jsx
import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.inputField}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
