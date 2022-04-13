import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  icon?: React.ReactElement<"svg">;
  children?: React.ReactElement | React.ReactElement[];
  buttonText?: string;
};
const Button = ({ icon, children, buttonText, ...props }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <div className={styles.content}>
        {icon}
        <span className={styles.text}>{buttonText}</span>
      </div>
    </button>
  );
};
export default Button;
