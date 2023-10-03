import { ChangeEvent, FormEvent, useState } from "react";
import { Glass } from "../assets/Glass";
import { Tv } from "../assets/Tv";

export function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search) return;
    const baseUrl = "https://www.google.com/search?";
    const searchParams = new URLSearchParams();
    searchParams.append("q", search);
    window.location.href = baseUrl + searchParams.toString();
  }
  function handleClearButton() {
    setSearch("");
  }

  return (
    <form className="search_bar" onSubmit={onSubmit}>
      <div className="search_bar__container">
        <div className="icon google_icon">
          <Glass />
        </div>
        <input
          className="input"
          value={search}
          type="search"
          onChange={handleSearch}
        />
        {search !== "" && (
          <button
            type="button"
            onClick={handleClearButton}
            className="icon cancel"
          >
            X
          </button>
        )}
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
    </form>
  );
}
