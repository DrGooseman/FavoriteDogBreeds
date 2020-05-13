import React from "react";
import BreedDisplayItem from "./BreedDisplayItem";

function BreedDisplayList(props) {
  const { breeds, handleDelete } = props;

  return (
    <div className="breed-picker-list">
      {breeds.length > 0 &&
        breeds.map((breed) => (
          <BreedDisplayItem
            name={breed.name}
            picture={breed.picture}
            handleDelete={handleDelete}
          />
        ))}
      {breeds.length === 0 && <h3>No favorite breeds yet. Go pick some!</h3>}
    </div>
  );
}

export default BreedDisplayList;
