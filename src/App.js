import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import WelcomeScreen from "./components/WelcomeScreen";
//
import Conduct from "./components/screens/Conduct";
import Courage from "./components/screens/Courage";
import Death from "./components/screens/Death";
import Education from "./components/screens/Education";
import Speech from "./components/screens/Speech";
import Time from "./components/screens/Time";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/time">
            <Menu />
            <Time />
          </Route>
          <Route path="/speech">
            <Menu />
            <Speech />
          </Route>
          <Route path="/education">
            <Menu />
            <Education />
          </Route>
          <Route path="/death">
            <Menu />
            <Death />
          </Route>
          <Route path="/courage">
            <Menu />
            <Courage />
          </Route>
          <Route path="/conduct">
            <Menu />
            <Conduct />
          </Route>
          <Route path="/">
            <Menu />
            <WelcomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
