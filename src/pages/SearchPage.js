import React from "react";
import "./styles/HomePage.css";

// REDUX
import { useSelector } from "react-redux";

import Card from "../components/Card";

function SearchPage() {
  // REDUX = DISPATCHER/SELECTOR
  const { searchResults } = useSelector((state) => state.globalState);

  return (
    <div className="SearchPage">
      <div className="section">
        <h2>
          {searchResults.length !== 0 ? "Search results" : "No results found"}
        </h2>
        {searchResults
          ? searchResults.map((data, idx) => {
              return (
                <Card
                  key={idx}
                  source={data.source.name}
                  title={data.title}
                  description={data.description}
                  time={data.publishedAt}
                  url={data.url}
                  imageUrl={data.urlToImage}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SearchPage;
