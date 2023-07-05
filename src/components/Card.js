import React from "react";
import "./styles/Card.css";

function Card(props) {
  const { source, title, description, time, url, imageUrl } = props;
  return (
    <div className="cardWrapper">
      <div className="content">
        <p className="source" style={{ fontSize: 14 }}>
          {source}
        </p>
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
