import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter location or Eircode"
        className="search-input"
      />

      <button className="search-button">
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBar;