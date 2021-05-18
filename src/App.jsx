import "./assets/css/App.css";
import "./assets/css/Bg.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
                <Header />
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
