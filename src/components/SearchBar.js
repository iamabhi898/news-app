import React from "react";
import "./styles/SearchBar.css";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar(props) {
  const { Link } = props;
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="searchWrapper">
      <Link to="/search">
        <SearchIcon className="searchIcon" />
      </Link>
      <input
        name="search"
        className="inputBar"
        type="text"
        placeholder="Search for topics, location & sources"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
