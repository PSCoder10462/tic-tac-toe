import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../redux/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  const handleLogin = () => {
    dispatch(login({ name: "Parv Sharma" }));
  };

  return (
    <div className="header">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Header;
