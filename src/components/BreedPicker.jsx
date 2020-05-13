import React, { useState } from "react";
import BreedPickerModal from "./BreedPickerModal";

function BreedPicker(props) {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <div className="breed-picker">
      <h1>Add a New Breed</h1>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setIsModalShowing(true)}
      >
        Add a Breed
      </button>

      <BreedPickerModal
        isShowing={isModalShowing}
        closeModal={() => setIsModalShowing(false)}
        handleAdd={props.handleAdd}
        excludedBreeds={props.excludedBreeds}
      />
    </div>
  );
}

export default BreedPicker;
