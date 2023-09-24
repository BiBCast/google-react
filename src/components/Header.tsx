import squareDot from "../assets/caramel_983385.png";
export function Header() {
  return (
    <div className="header">
      <div className="header__link">
        <a href="#">gmail</a>
      </div>
      <div className="header__link">
        <a href="#">images</a>
      </div>
      <div className="header__button">
        <div>
          <img src={squareDot} />
        </div>
      </div>
      <div className="header__icon">
        <a href="#">1</a>
      </div>
    </div>
  );
}
