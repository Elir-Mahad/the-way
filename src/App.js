import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Synopsis from "./components/Synopsis";
import UserGuide from "./components/UserGuide";
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
//
//! --------------------------------------Imports above

// remove local repo from laptop

const basketFromLocalStorage = JSON.parse(
  localStorage.getItem("basket") || "[]"
);

function App() {
  const [basket, setBasket] = useState(basketFromLocalStorage);

  useEffect(() => {
    //
    localStorage.setItem("basket", JSON.stringify(basket));
    // Store the basket in the local storage
  });

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
            {/*  */}
            <Route path="/userguide">
              <MenuAndBasket />
              <UserGuide />
            </Route>
            <Route path="/synopsis">
              <MenuAndBasket />
              <Synopsis />
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
