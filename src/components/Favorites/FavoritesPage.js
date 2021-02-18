import React, { useState } from "react";
import "./FavoritesPage.css";
import GifDisplay from "../Gif/GifDisplay";

const FavoritesPage = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <h1 className="text-center">Favorites</h1>
      <div className="container">
        {favorites.map((v) => (
          <GifDisplay key={v.id} gif={v} />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
