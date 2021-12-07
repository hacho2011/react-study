import React, { useRef } from "react";
import styles from "./searchBox.module.css";

const SearchBox = (props) => {
  const searchRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;
    query && props.onSearch(query);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={searchRef} type="text" className={styles.searchBox} />
      <button className={styles.searchBtn}>검색</button>
    </form>
  );
};

export default SearchBox;
