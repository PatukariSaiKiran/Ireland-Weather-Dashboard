import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

type SearchBarProps = {
  onSearch: (location: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  }
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter location or Eircode"
        className="search-input"
      />

      <button className="search-button" onClick={handleSearch}>
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBar;