import React from "react";
import { Link, useHistory } from "react-router-dom";
import online from "../assets/images/online.svg";
import local from "../assets/images/local.svg";
import stats from "../assets/images/stats.svg";
import settings from "../assets/images/settings.png";

function Home() {
  const history = useHistory();
  return (
    <div className="min-h-screen grid place-items-center">
      {/* <button
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
      </button> */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 md:h-96 h-5/6 gap-5 md:gap-10">
        <Link
          to="/play"
          className="home-card bg-green-500"
          style={{ backgroundImage: `url(${online})`, backgroundSize: "250px" }}
        >
          <h1>Online</h1>
        </Link>
        <Link
          to="/local/play"
          className="home-card bg-red-500"
          style={{ backgroundImage: `url(${local})`, backgroundSize: "250px" }}
        >
          <h1>Local</h1>
        </Link>
        <Link
          to="/login"
          className="home-card bg-blue-500"
          style={{ backgroundImage: `url(${stats})`, backgroundSize: "250px" }}
        >
          <h1>Stats</h1>
        </Link>
        <Link
          to="/login"
          className="home-card bg-yellow-500"
          style={{
            backgroundImage: `url(${settings})`,
            backgroundSize: "250px",
          }}
        >
          <h1>Settings</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
