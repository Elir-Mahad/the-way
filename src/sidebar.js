import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./App.css";
import { MenuItem } from "./Styles";
import "./App.css";

export default (props) => {
  return (
    // Pass on our props
    <Menu className="menucontainer" {...props}>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/conduct">Conduct</MenuItem>
      <MenuItem href="/courage">Courage</MenuItem>
      <MenuItem href="/death">Death</MenuItem>
      <MenuItem href="/education">Education</MenuItem>
      <MenuItem href="/speech">Speech</MenuItem>
      <MenuItem href="/time">Time</MenuItem>
    </Menu>
  );
};
