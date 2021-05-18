import "./assets/css/App.css";
import "./assets/css/Bg.css";
import Gameboard from "./components/Gameboard";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import firebase from "./firebase";
import { login, logout } from "./redux/userSlice";
import { useDispatch } from "react-redux";

const auth = firebase.auth();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // dispatch login
        console.log(user);
      } else {
        // dispatch logout
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <div class="container-fluid">
          <div class="background">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>

            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/play">
                <Gameboard />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
