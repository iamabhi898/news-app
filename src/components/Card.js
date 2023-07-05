import React from "react";
import "./styles/Card.css";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { addSavedArticles, removeSavedArticles } from "../redux/reducer";

function Card(props) {
  const { source, title, description, time, url, imageUrl } = props;
  const [isSaved, setIsSaved] = React.useState(false);

  const dispatch = useDispatch();
  const { savedArticles } = useSelector((state) => state.globalState);

  const handleAddSavedArticle = () => {
    setIsSaved(true);
    dispatch(
      addSavedArticles({ source, title, description, time, url, imageUrl })
    );
  };

  const handleRemoveSavedArticle = () => {
    setIsSaved(false);
    dispatch(removeSavedArticles({ title }));
  };

  const handleCheckIsSaved = () => {
    for (let item of savedArticles) {
      if (item.title === title) {
        return setIsSaved(true);
      }
    }
  };

  React.useEffect(() => {
    handleCheckIsSaved();
  }, [isSaved, savedArticles]);

  return (
    <div className="cardWrapper">
      <div className="content">
        <div className="header">
          <p className="source" style={{ fontSize: 14 }}>
            {source}
          </p>
          {isSaved ? (
            <BookmarkIcon
              className="icon"
              fontSize="12"
              onClick={handleRemoveSavedArticle}
            />
          ) : (
            <BookmarkBorderIcon
              className="icon"
              fontSize="12"
              onClick={handleAddSavedArticle}
            />
          )}
        </div>
        <p className="title" style={{ fontSize: 18 }}>
          <a href={url}>{title}</a>
        </p>
        <p className="description" style={{ fontSize: 16 }}>
          {description}
        </p>
        <p className="time" style={{ fontSize: 13 }}>
          {time.slice(0, 10)}
        </p>
      </div>
      <div className="imageWrapper">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={source}
            style={{ height: "100px", borderRadius: "2px" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Card;
