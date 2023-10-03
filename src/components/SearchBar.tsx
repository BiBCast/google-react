import { Glass } from "../assets/Glass";
import { Tv } from "../assets/Tv";

export function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search_bar__container">
        <div className="icon google_icon">
          <Glass />
        </div>
        <input className="input" type="search" />
        <button className="icon cancel">X</button>
        <div className="container__separator"></div>
        <div className="icon">
          <Tv />
        </div>
      </div>
      <div className="search_bar__button">
        <button>Google search</button>
        <button>i'm feeling lucky</button>
      </div>
      <div className="search_bar__language">
        Google offered in:<a href="#">&nbsp;italiano</a>
      </div>
    </div>
  );
}
