import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    await onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No File"}
      </button>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        name="file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageFileInput;
