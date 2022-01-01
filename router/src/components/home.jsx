import React from "react";
import { useHistory } from "react-router";

const Home = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>HOME</h1>
      <button
        onClick={() => {
          history.push("/profile");
        }}
      >
        profile
      </button>
    </>
  );
};

export default Home;
