import React from "react";

import "./DropdownContainer.scss";
export const DropdownContainer = ({
  show,
  children,
  toggler,
  customPosition,
}) => (
  <div className="dropdown-container">
    {toggler}
    <div
      style={customPosition ? { right: "1px" } : {}}
      className={`dropdown-body ${show && "show"}`}
    >
      <div
        style={customPosition ? { right: "200px", left: "unset" } : {}}
        className="arrow-up"
      ></div>
      <div className="dropdown-items">{children}</div>
    </div>
  </div>
);
