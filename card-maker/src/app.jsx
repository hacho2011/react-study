import styles from "./app.module.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} exact />
          <Route path="/maker" element={<Maker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
