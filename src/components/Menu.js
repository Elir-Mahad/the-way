import React from "react";
import { Link } from "react-router-dom";
import { MenuBox } from "../Styles";

function Menu() {
  return (
    <MenuBox className="Menu">
      <Link style={{ textDecoration: "none" }} to="/">
        <p> Home </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/conduct">
        <p> Conduct </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/courage">
        <p> Courage </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/death">
        <p> Death </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/education">
        <p> Education </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/speech">
        <p> Speech </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/time">
        <p> Time </p>
      </Link>
    </MenuBox>
  );
}

export default Menu;
