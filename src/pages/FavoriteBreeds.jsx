import React, { useState } from "react";
import Header from "../components/Header";
import BreedPicker from "../components/BreedPicker";
import FavoriteBreedDisplay from "../components/FavoriteBreedDisplay";

function FavoriteBreeds() {
  const [favoriteBreeds, setFavoriteBreeds] = useState([]);

  function addFavoriteBreed(newBreed) {
    setFavoriteBreeds((prevState) => [...prevState, newBreed]);
  }

  function deleteFavoriteBreed(breedToRemove) {
    setFavoriteBreeds((prevState) => {
      const newArray = prevState.filter(
        (breed) => breed.name !== breedToRemove
      );
      return newArray;
    });
  }

  return (
    <React.Fragment>
      <Header />
      <BreedPicker
        handleAdd={addFavoriteBreed}
        excludedBreeds={favoriteBreeds}
      />
      <FavoriteBreedDisplay
        breeds={favoriteBreeds}
        handleDelete={deleteFavoriteBreed}
      />
    </React.Fragment>
  );
}

export default FavoriteBreeds;
