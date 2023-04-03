import React from "react";
import styles from "./snakeBorderButton.module.css";

const SnakeBorderButton = (props) => {
  return (
    <button href="#" className={styles.btnAnchor}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.title}
    </button>
  );
};

export default SnakeBorderButton;
