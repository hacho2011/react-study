import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <h1 className={styles.logo}>LOGO</h1>
      <h2 className={styles.title}>TITLE</h2>
    </header>
  );
};

export default Header;
