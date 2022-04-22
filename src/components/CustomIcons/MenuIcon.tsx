import React from "react";
import styles from "./MenuIcon.module.scss";

export interface MenuIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  open?: boolean;
}


/**
 * 
 * @param open boolean 
 * @returns 
 */
const MenuIcon = ( props: MenuIconProps) => {
  const { open, ...rest } = props;
  return (
    <svg
      version="1.0"
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
      {...rest}
    >
      <g id="Layer_1">
        <line
          className={`${styles.st1} ${open ? styles.on : ""} stroke-orange-400`}
          x1="5"
          y1="55"
          x2="55"
          y2="5"
        />
        <line
          className={`${styles.st1} ${open ? styles.on : ""} stroke-orange-400`}
          x1="55"
          y1="55"
          x2="5"
          y2="5"
        />
        <line
          className={`${styles.st2} ${open ? styles.on2 : ""} stroke-zinc-100`}
          x1="55"
          y1="5"
          x2="5"
          y2="55"
        />
        <line
          className={`${styles.st2} ${open ? styles.on2 : ""} stroke-zinc-100`}
          x1="55"
          y1="55"
          x2="5"
          y2="5"
        />
      </g>
      <g id="Layer_2">
        <line className={`${styles.st1} ${!open ? styles.on : ""} stroke-zinc-100`} x1="5" y1="5" x2="55" y2="5" />
        <line className={`${styles.st1} ${!open ? styles.on : ""} stroke-zinc-100`} x1="5" y1="30" x2="55" y2="30" />
        <line className={`${styles.st1} ${!open ? styles.on : ""} stroke-zinc-100`} x1="5" y1="55" x2="55" y2="55" />
        <line className="st3" x1="5" y1="5" x2="55" y2="5" />
        <line className="st3" x1="5" y1="30" x2="55" y2="30" />
        <line className="st3" x1="5" y1="55" x2="55" y2="55" />
      </g>
    </svg>
  );
};
export default MenuIcon;
