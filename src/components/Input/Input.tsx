import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  placeHolder?: string;
};

const Input = ({ placeHolder, ...props }: InputProps) => {
  return (
    <input type="text" placeholder={placeHolder} className={styles.input} />
  );
};

export default Input;
