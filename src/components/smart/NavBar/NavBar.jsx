import "./NavBar.scss";
import { leftNavList, rightNavList } from "../../../utility/constant";
import { Hamburger } from "../../presentational/Hamburger/Hamburger";
import { DropdownContainer } from "../../presentational/DropdownContainer/DropdownContainer";
import { useState } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useHistory } from "react-router-dom";
const NavBar = () => {
  const history = useHistory();
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showNavMenuIndex, setShowNavMenuIndex] = useState(-1);
  const handleShowMobileMenu = (e) => {
    e.preventDefault();
    setMobileMenu(!showMobileMenu);
  };
  const toggleNavDropDown = (side, i) => {
    let menu = `${side}_${i}`;
    if (showNavMenuIndex === menu) {
      setShowNavMenuIndex(-1);
    } else {
      setShowNavMenuIndex(menu);
    }
  };
  const renderMobileMenu = () => (
    <div className="mobile-menu">
      <div className="top-bar">
        <div className="left">
          Sign In
          <div className="vertical-line"></div>
          Create account
        </div>
        <div className="close" onClick={handleShowMobileMenu}>
          &#10006;
        </div>
      </div>
      <ul className="nav-list">
        {rightNavList.map((item, i) => (
          <li
            key={`right${i}`}
            className="list-item"
            onClick={(e) => {
              history.push("/orderDetails");
              handleShowMobileMenu(e);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="nav-bar-container">
      <div className="mobile-menu-container">
        <DropdownContainer
          show={showMobileMenu}
          toggler={<Hamburger handleClick={handleShowMobileMenu} />}
        >
          {renderMobileMenu()}
        </DropdownContainer>
      </div>
      <div className="desktop-menu-container">
        <ul className="nav-list">
          {leftNavList.map((item, i) => (
            <DropdownContainer
              key={`left_${i}`}
              show={showNavMenuIndex === `left_${i}`}
              toggler={
                <li
                  className="list-item bold"
                  onClick={(e) => toggleNavDropDown("left", i)}
                >
                  {item}
                </li>
              }
            >
              Static Menus
            </DropdownContainer>
          ))}
        </ul>
        <ul className="nav-list">
          {rightNavList.map((item, i) => (
            <DropdownContainer
              key={`right_${i}`}
              show={showNavMenuIndex === `right_${i}`}
              customPosition={i === 2}
              toggler={
                <li
                  className="list-item"
                  onClick={(e) => toggleNavDropDown("right", i)}
                >
                  {item}
                </li>
              }
            >
              {i === 2 ? <OrderSummary /> : "Static Menus"}
            </DropdownContainer>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
