export function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search_bar__container">
        <div className="icon">icon</div>
        <input className="input" type="search" />
        <div>X</div>
        <div className="container__separator"></div>
        <div className="icon">icon</div>
      </div>
      <div className="search_bar__button">
        <div>Google search</div>
        <div>i'm feeling lucky</div>
      </div>
      <div className="search_bar__language">
        Google offered in :<a href="#">italiano</a>
      </div>
    </div>
  );
}
