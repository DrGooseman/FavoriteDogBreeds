import React from "react";

function BreadDisplayItem(props) {
  const { name, picture, handleDelete } = props;

  return (
    <div className={"breed-display-item "}>
      <img
        src={picture}
        alt={name + " pic"}
        onClick={() => handleDelete(name)}
      />
      <h4>{name}</h4>
    </div>
  );
}

export default BreadDisplayItem;
