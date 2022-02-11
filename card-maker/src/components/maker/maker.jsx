import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import ImageUploader from "../../service/image_uploader";
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "jin",
      fileURL: "asd",
    },
    2: {
      id: "2",
      name: "Dahee",
      company: "Samsung",
      theme: "light",
      title: "Frontend Engineer",
      email: "dahee@gmail.com",
      message: "Code your Dream",
      fileName: "jin",
      fileURL: "asd",
    },
    3: {
      id: "3",
      name: "Jin",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "go for it",
      fileName: "jin",
      fileURL: "asd",
    },
  });
  const navigate = useNavigate;
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const uploadImage = (card, file) => {
    const imageUploader = new ImageUploader();
    imageUploader.upload(file);
    card = { ...card, fileName: file.name };
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          uploadImage={uploadImage}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
