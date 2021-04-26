import './App.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { BergForm } from "./components/BergForm";


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink exact to="/home">Home</NavLink></li>
          <li><NavLink to="/formular">BergForm</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/formular">
            <BergForm />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
