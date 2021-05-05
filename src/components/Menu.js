import React from "react";
import { Link } from "react-router-dom";
//

function Menu() {
  return (
    <div className="Menu">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Home </a>
          </li>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/education">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Education </a>
          </li>
        </div>
      </Link>
      {/* <Link style={{ textDecoration: "none" }} to="/pagetwo">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Page two </a>
          </li>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pagethree">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Page three </a>
          </li>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pagefour">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Page four </a>
          </li>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pagefive">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Page five </a>
          </li>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pagesix">
        <div className="MenuOption">
          <li className="OptionName">
            <a> Page six </a>
          </li>
        </div>
      </Link> */}
    </div>
  );
}

export default Menu;
