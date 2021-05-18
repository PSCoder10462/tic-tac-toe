import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>This is home</h1>

      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/play");
        }}
      >
        Play
      </button>
    </div>
  );
}

export default Home;
