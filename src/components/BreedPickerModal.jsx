import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import BreedList from "./BreedPickerList";
import axios from "axios";

function BreedPickerModal(props) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    sendBreedRequest();
  }, []);

  async function sendBreedRequest() {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");

      const breedsArray = [];
      Object.keys(response.data.message).forEach(function (key, index) {
        breedsArray.push({ name: key, picture: null });
      });
      setBreeds(breedsArray);
      populatePictures(breedsArray);
    } catch (err) {}
  }

  async function sendPictureRequest(breedName) {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      );
      return response.data.message;
    } catch (err) {}
    return null;
  }

  async function populatePictures(breedsArray) {
    breedsArray.forEach(
      async (breed) => (breed.picture = await sendPictureRequest(breed.name))
    );
    setBreeds(breedsArray);
  }

  function handleClick(breedName) {
    const selectedBreed = breeds.find((breed) => breed.name === breedName);
    setSelectedBreed(selectedBreed);
  }

  function addBreed() {
    props.handleAdd(selectedBreed);
    setSelectedBreed(null);
    props.closeModal();
  }

  function addRandomBreed() {
    const selectableBreeds = breeds.filter(
      (breed) => !props.excludedBreeds.includes(breed)
    );
    props.handleAdd(
      selectableBreeds[Math.floor(Math.random() * selectableBreeds.length)]
    );
    setSelectedBreed(null);
    props.closeModal();
  }

  return (
    <Modal size="lg" show={props.isShowing} onHide={props.closeModal}>
      <Modal.Header>
        <Modal.Title>Choose a Favorite Breed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="breed-picker-modal-body">
          <BreedList
            breeds={breeds}
            emptyText={"No Breeds Founds..."}
            handleClick={handleClick}
            selectedBreed={selectedBreed}
            excludedBreeds={props.excludedBreeds}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button class="btn btn-danger" handleClick={props.closeModal}>
          Cancel
        </button>
        <button
          class="btn btn-success "
          disabled={!selectedBreed}
          onClick={addBreed}
        >
          Save This Breed
        </button>
        <button class="btn btn-warning " onClick={addRandomBreed}>
          Add Random Breed
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default BreedPickerModal;
