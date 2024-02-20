import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h3 className="">{props.title}</h3>
        <div
          className={`chevron ${isOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <span>
            <img src={props.chevronUrl} alt="imgChevron" />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p className="text">{props.text}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
