import React from "react";
import { Link } from "react-router-dom";
import { useToggle } from "./usetoogle";
import { MenuBox, MenuIconContainer, MenuItems, MenuItem } from "../Styles";
import MenuIcon from "@material-ui/icons/Menu";
//
function Menu() {
  const [isToggled, toggle] = useToggle(false);
  return (
    <MenuBox>
      <MenuIconContainer onClick={toggle}>
        <MenuIcon />
      </MenuIconContainer>
      {isToggled && (
        <MenuItems>
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem> Home </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/conduct">
            <MenuItem> Conduct </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/courage">
            <MenuItem> Courage </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/death">
            <MenuItem> Death </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/education">
            <MenuItem> Education </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/speech">
            <MenuItem> Speech </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/time">
            <MenuItem> Time </MenuItem>
          </Link>
        </MenuItems>
      )}
    </MenuBox>
  );
}
export default Menu;
