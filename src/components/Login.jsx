import React, { useState } from "react";
import firebase from "../firebase.js";
import google_icon from "../assets/images/google_icon.png";

const auth = firebase.auth(),
  provider = new firebase.auth.GoogleAuthProvider();

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

  const handleGauth = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ additionalUserInfo }) => {
        if (additionalUserInfo.isNewUser) {
          // newUser
          console.log("New User");
        }
        const { email } = additionalUserInfo.profile;
        console.log(email);
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
        console.log(error);
      });
  };

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
    <div className="login grid place-items-center min-h-screen">
      <div className="flex flex-col items-stretch w-80 space-y-4">
        <form className="flex flex-col space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            onSubmit={() => console.log("Submit")}
            className="login__input mb-1"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="pass****"
            className="login__input mt-0"
          />
          <div className="flex items-center justify-center  space-x-4">
            <button
              onClick={handleLogin}
              type="submit"
              className="button bg-green-700 flex-grow-[0.4]"
            >
              Login
            </button>
            <div
              onClick={handleSignUp}
              className="button bg-red-700 flex-grow-[0.4]"
            >
              Create account
            </div>
          </div>
        </form>
        <button
          onClick={handleGauth}
          className="button m-3 flex items-center justify-center bg-blue-700"
        >
          <img
            src={google_icon}
            alt="google_icon"
            className="pr-3 border-r max-h-6 object-contain"
          />
          <span className="pl-3">Sign-in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
