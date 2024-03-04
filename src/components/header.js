import React from "react";
import { Link, useLocation } from "react-router-dom";
function Header(props) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="header">
      <div className="logo-navbar">
        <div className="contente-logo">
          <img className="logo" src={props.logoUrl} alt="logo" />
        </div>
        <nav className="navbar">
          <Link
            className={pathname === "/" ? "active" : ""}
            to={"/"}
            rel="noopener noreferrer"
          >
            {props.homeText}
          </Link>

          <Link
            className={pathname === "/about" ? "active" : ""}
            to={"/" + props.aboutLink}
            rel="noopener noreferrer"
          >
            {props.aboutText}
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
