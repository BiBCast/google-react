import { Glass } from "../assets/Glass";
import { Tv } from "../assets/Tv";

export function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search_bar__container">
        <div className="icon">
          <Glass />
        </div>
        <input className="input" type="search" />
        <div className="gray">X</div>
        <div className="container__separator"></div>
        <div className="icon">
          <Tv />
        </div>
      </div>
      <div className="search_bar__button">
        <div>Google search</div>
        <div>i'm feeling lucky</div>
      </div>
      <div className="search_bar__language">
        Google offered in:<a href="#">&nbsp;italiano</a>
      </div>
    </div>
  );
}
