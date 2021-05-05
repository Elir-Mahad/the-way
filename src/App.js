import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EduScreen from "./components/EducationScreen";
import Menu from "./components/Menu";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/education">
            <Menu />
            <EduScreen />
          </Route>
          {/*  */}
          <Route path="/">
            <Menu />
            <WelcomeScreen />
          </Route>
          {/*  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
