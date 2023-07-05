import React from "react";
import "./styles/PageLayout.css";

import { Outlet, Link } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import SearchBar from "../components/SearchBar";

function PageLayout() {
  return (
    <div className="pageWrapper">
      <div className="appHeader">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="titleLogo">
            <h1>News</h1>
          </div>
        </Link>
        <SearchBar Link={Link} />
        <Link to="/bookmark">
          <BookmarkBorderIcon className="bookmarkIcon" />
        </Link>
      </div>
      <div className="bodyWrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
