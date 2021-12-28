import styles from "./app.module.css";
import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <p className={styles.asdf}>asdasd</p>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
