import React from "react";
function Header(props) {
  return (
    <header className="header">
      <div className="logo-navbar">
        <div className="contente-logo">
          <img className="logo" src={props.logoUrl} alt="logo" />
        </div>
        <nav className="navbar">
          <a
            className="nav-link"
            href={props.homeLink}
            rel="noopener noreferrer"
          >
            {props.homeText}
          </a>

          <a
            className="nav-link"
            href={props.aboutLink}
            rel="noopener noreferrer"
          >
            {props.aboutText}
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
