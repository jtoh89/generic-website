import React from "react";
import styles from "./TextFeatureVertical.module.css";

const TextFeatureVertical = ({ content }) => {
  const { h2, text } = content;

  return (
    <div className={styles.mainLayout}>
      <div className={styles.innerLayout}>
        <h2>{h2}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextFeatureVertical;
