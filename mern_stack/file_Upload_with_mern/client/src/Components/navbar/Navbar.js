import React from "react";
import "./Navbar.css";
import item from "./navItem.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <div class="navContainer_logo">Pyjonathon</div>
        <ul className="navContainer_ul">
          {item
            ? item.map((v) => (
                <li>
                  <Link className="navContainer_a" to={v.path}>{v.itemName}</Link>
                </li>
              ))
            : "Loading..."}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
