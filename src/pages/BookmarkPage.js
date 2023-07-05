import React from "react";

// REDUX
import { useSelector } from "react-redux";

import Card from "../components/Card";

function BookmarkPage() {
  // REDUX = DISPATCHER/SELECTOR
  const { savedArticles } = useSelector((state) => state.globalState);

  return (
    <div className="BookmarkPage">
      <div className="section">
        <h2>
          {savedArticles.length !== 0 ? "Saved articles" : "No saved articles"}
        </h2>
        {savedArticles
          ? savedArticles.toReversed().map((data, idx) => {
              return (
                <Card
                  key={idx}
                  source={data.source}
                  title={data.title}
                  description={data.description}
                  time={data.time}
                  url={data.url}
                  imageUrl={data.imageUrl}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default BookmarkPage;
