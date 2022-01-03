import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    console.log(userId);
    navigate("/maker", { state: { id: userId } });
  };
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  return (
    <section>
      <Header />
      <ul>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
        <li>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
