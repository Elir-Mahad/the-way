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
import LikedQuotes from "./components/screens/LikedQuotes";
//
import { StateProvider } from "./StateProvider";
import { initialState } from "./reducer";
import reducer from "./reducer";
import MenuAndBasket from "./components/MenuAndBasket";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route path="/favourite">
              <MenuAndBasket />
              <LikedQuotes />
            </Route>
            <Route path="/time">
              <MenuAndBasket />
              <Time />
            </Route>
            <Route path="/speech">
              <MenuAndBasket />
              <Speech />
            </Route>
            <Route path="/education">
              <MenuAndBasket />
              <Education />
            </Route>
            <Route path="/death">
              <MenuAndBasket />
              <Death />
            </Route>
            <Route path="/courage">
              <MenuAndBasket />
              <Courage />
            </Route>
            <Route path="/conduct">
              <MenuAndBasket />
              <Conduct />
            </Route>
            <Route path="/">
              <MenuAndBasket />
              <WelcomeScreen />
            </Route>
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
}
export default App;
