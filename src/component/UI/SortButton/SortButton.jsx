import React from "react";
import styles from "./SortButton.module.css";

const SortButton = ({ callbackUp, callbackDown, idMin, idMax }) => {
    
  return (
    <div className={styles.strelki}>
      <input onChange={callbackUp} type={"radio"} name='minMax' id={idMax} />
      <label className={styles.up} htmlFor={idMax} />
      <input onChange={callbackDown} type={"radio"} name='minMax' id={idMin} />
      <label htmlFor={idMin} className={styles.down} />
    </div>
  );
};

export default SortButton;
