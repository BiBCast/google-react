import { GoogleProfile } from "../assets/GoogleProfile";
import { SquareDot } from "../assets/SquareDot";
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
          <SquareDot />
        </div>
      </div>
      <div className="header__icon">
        <div>
          <GoogleProfile />
        </div>
      </div>
    </div>
  );
}
