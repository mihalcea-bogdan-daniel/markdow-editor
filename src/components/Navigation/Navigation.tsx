import React from "react";
import styles from "./Navigation.module.scss";
import MenuButton from "./MenuButton/MenuButton";
type TNavItem = React.ReactElement;
type Props = {
  logoTitle?: string;
  children?: TNavItem | TNavItem[];
};

const NavBar = ({ logoTitle, children }: Props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.square}>
        <MenuButton />
      </div>
      {logoTitle ? (
        <div>
          <h1 className={styles.h1}>{logoTitle}</h1>
        </div>
      ) : null}
      {children ? (
        <div className={styles.navitemscontainer}>{children}</div>
      ) : null}
    </nav>
  );
};
export default NavBar;

type NavProps = {
  icon?: React.ReactElement<"svg">;
  children?: React.ReactElement;
  description?: string;
};
const NavItem = ({
  icon,
  description,
  children,
}: NavProps): TNavItem => {
  return (
    <>
      <div className={styles.navItem}>
        {icon}
        <div className={styles.content}>
          {description ? <span className={styles.description}>{description}</span> : null}
          {children}
        </div>
      </div>
    </>
  );
};
export { NavBar, NavItem };
