import React from "react";
import "./GifDisplay.css";

const GifDisplay = ({ gif }) => {
  return (
    <div className="gif-container">
      <h3 className="text-center">{gif.title}</h3>
      <img className="gif" src={gif.url} />
    </div>
  );
};

export default GifDisplay;
