import React from "react";
import BreedDisplayList from "./BreedDisplayList";

function FavoriteBreedDisplay(props) {
  return (
    <div className="favorite-breed-display">
      <h1>Your Favorite Breeds</h1>
      <BreedDisplayList
        breeds={props.breeds}
        handleDelete={props.handleDelete}
      />
    </div>
  );
}

export default FavoriteBreedDisplay;
