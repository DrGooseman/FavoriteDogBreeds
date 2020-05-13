import React from "react";

function BreedPickerItem(props) {
  const { name, picture, isSelected, handleClick } = props;

  return (
    <div className={"breed-picker-item " + (isSelected && "selected")}>
      <img
        src={picture}
        alt={name + " pic"}
        onClick={() => handleClick(name)}
      />
      <h4>{name}</h4>
    </div>
  );
}

export default BreedPickerItem;
