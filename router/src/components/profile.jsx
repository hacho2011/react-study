import React from "react";
import { useHistory } from "react-router";

const Profile = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>PROFILE</h1>
      <button onClick={() => history.push("/home")}>home</button>
    </>
  );
};

export default Profile;
