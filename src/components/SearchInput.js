import searchIcon from "../assets/search-icon@2x.png";

export default function SearchInput() {
  return (
    <div className="search">
      <img src={searchIcon} className="search-icon" alt="search icon" />
      <input className="search-input" type="search" placeholder="Search..." />
    </div>
  );
}
