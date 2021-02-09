import "./Hamburger.scss";
export const Hamburger = ({ handleClick }) => (
  <div className="burger-container">
    <div id="burger" onClick={handleClick}>
      <div className="bar topBar"></div>
      <div className="bar middleBar"></div>
      <div className="bar btmBar"></div>
    </div>
  </div>
);
