import React from "react";
import SearchBox from "../searchBox/searchBox";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header>
      <h1 className={styles.logo}>유튜브</h1>
      <SearchBox onSearch={props.onSearch} />
    </header>
  );
};

export default Header;
