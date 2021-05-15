import "./assets/css/App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header />
          </Route>
          <Route path="/play">
            <Gameboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
