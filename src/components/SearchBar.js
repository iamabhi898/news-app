import React from "react";
import "./styles/SearchBar.css";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { axiosSearchGetRequest } from "../api/axios_requests";
import { setSearchResults } from "../redux/reducer";

function SearchBar(props) {
  const { Link } = props;
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState("");

  // REDUX = DISPATCHER/SELECTOR
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.globalState);

  const handleGetSearchNews = async (searchValue) => {
    try {
      await axiosSearchGetRequest(searchValue)
        .then((res) => {
          dispatch(setSearchResults(res.data.articles.slice(0, 20)));
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="searchWrapper">
      <Link to="/search">
        <SearchIcon
          className="searchIcon"
          onClick={() => {
            handleGetSearchNews(searchValue);
          }}
        />
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
        on
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            handleGetSearchNews(searchValue);
            navigate("/search");
          }
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
