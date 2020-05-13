import React from "react";
import BreedPickerItem from "./BreedPickerItem";

function BreedPickerList(props) {
  const { breeds, handleClick, selectedBreed, excludedBreeds } = props;

  return (
    <div className="breed-picker-list">
      {breeds.length > 0 &&
        breeds
          .filter((breed) => !excludedBreeds.includes(breed))
          .map((breed) => (
            <BreedPickerItem
              name={breed.name}
              picture={breed.picture}
              handleClick={handleClick}
              isSelected={selectedBreed && breed.name === selectedBreed.name}
            />
          ))}
      {breeds.length === 0 && <h3>No breeds founds.</h3>}
    </div>
  );
}

export default BreedPickerList;
