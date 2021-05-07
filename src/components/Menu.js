import React from "react";
import { Link } from "react-router-dom";
import { useToggle } from "./usetoogle";
import {
  MenuBox,
  MenuIconContainer,
  MenuItems,
  ItemAndIcon,
  MenuItem,
  MenuItemIcon,
} from "../Styles";
import MenuIcon from "@material-ui/icons/Menu";
//
import logo from "../assets/logo.jpeg";
import description from "../assets/description.png";
import guide from "../assets/info.png";
import conduct from "../assets/character.png";
import courage from "../assets/courage.png";
import death from "../assets/death.png";
import education from "../assets/education.png";
import speech from "../assets/speech.png";
import time from "../assets/time.png";

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
            <ItemAndIcon>
              <MenuItem> Home </MenuItem>
              <MenuItemIcon src={logo} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/synopsis">
            <ItemAndIcon>
              <MenuItem> Synopsis </MenuItem>
              <MenuItemIcon src={description} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/userguide">
            <ItemAndIcon>
              <MenuItem> User guide </MenuItem>
              <MenuItemIcon src={guide} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/conduct">
            <ItemAndIcon>
              <MenuItem> Conduct </MenuItem>
              <MenuItemIcon src={conduct} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/courage">
            <ItemAndIcon>
              <MenuItem> Courage </MenuItem>
              <MenuItemIcon src={courage} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/death">
            <ItemAndIcon>
              <MenuItem> Death </MenuItem>
              <MenuItemIcon src={death} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/education">
            <ItemAndIcon>
              <MenuItem> Education </MenuItem>
              <MenuItemIcon src={education} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/speech">
            <ItemAndIcon>
              <MenuItem> Speech </MenuItem>
              <MenuItemIcon src={speech} />
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/time">
            <ItemAndIcon>
              <MenuItem> Time </MenuItem>
              <MenuItemIcon src={time} />
            </ItemAndIcon>
          </Link>
        </MenuItems>
      )}
    </MenuBox>
  );
}
export default Menu;
