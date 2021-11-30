import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import MenuAndBasket from "./components/general-parts/MenuAndBasket";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import Synopsis from "./components/screens/SynopsisScreen";
import UserGuide from "./components/screens/UserGuideScreen";
import Time from "./components/screens/TimeScreen";
import LikedQuotes from "./components/screens/LikedQuotesScreen";
//
import { StateProvider } from "./rca/StateProvider";
import { initialState } from "./rca/reducer";
import reducer from "./rca/reducer";
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
