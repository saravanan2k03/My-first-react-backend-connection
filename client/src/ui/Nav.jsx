import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <h3>Employee</h3>
      <ul>
        <Link to="/Employee" className="Employee">
          <li>Employee</li>
        </Link>

        <Link to="/About" className="About">
          <li>About</li>
        </Link>
        <Link to="/Shop" className="Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
