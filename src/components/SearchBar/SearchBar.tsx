import { FiSearch } from "react-icons/fi";

function SearchBar() {
    return (
      <div className="search-container">
        <input 
         type="text"
         placeholder="Enter location or Eircode"
        />

        <button>
            <FiSearch />
        </button>
      </div>
        
    );
}
export default SearchBar;