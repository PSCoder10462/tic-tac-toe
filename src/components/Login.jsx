import React, { useState } from "react";
import firebase from "../firebase.js";

const auth = firebase.auth();

function Login() {
  const [email, setEmail] = useState(""),
    [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {})
      .catch((error) => {
        // var errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleGauth = () => {};

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {})
      .catch((error) => {
        // var errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="pass****"
        />
        <button type="submit">Login</button>
      </form>
      <button>Create account</button>
      <button>Sign-in with Google</button>
    </div>
  );
}

export default Login;
