import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
//
import Conduct from "./components/screens/Conduct";
import Courage from "./components/screens/Courage";
import Death from "./components/screens/Death";
import Education from "./components/screens/Education";
import Speech from "./components/screens/Speech";
import Time from "./components/screens/Time";
//
import SideBar from "./sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuIconContainer } from "./Styles";

function App() {
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <MenuIconContainer id="page-wrap">
        <MenuIcon />
      </MenuIconContainer>
      <Router>
        <Switch>
          <Route path="/time">
            <Time />
          </Route>
          <Route path="/speech">
            <Speech />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/death">
            <Death />
          </Route>
          <Route path="/courage">
            <Courage />
          </Route>
          <Route path="/conduct">
            <Conduct />
          </Route>
          <Route path="/">
            <WelcomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
