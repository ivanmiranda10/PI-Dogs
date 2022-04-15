import React from "react";
import { Link } from "react-router-dom";
import {
  DogInfo,
  DogImg,
  DogName,
  DogWeightMin,
  DogWeightMax,
  DogBtnDetail,
  DogBtnDelete,
  ButtonsContainer,
  DogTemperaments,
} from "./DogCardStyles";

export default function CardDog({
  image,
  name,
  weightMin,
  weightMax,
  life_span,
  temperaments,
  id,
  deleteAction,
  resetPage,
}) {
  const dogDeleted = (e) => {
    deleteAction(e);
    resetPage();
  };
  return (
    <>
      <DogImg src={image} alt="img not found" />
      <DogInfo>
        <DogName>{name}</DogName>
        <DogWeightMin>
          {weightMin
            ? "Weight Min: " + weightMin + " Kg"
            : "Weight Min: Unknown"}
        </DogWeightMin>
        <DogWeightMax>
          {weightMax
            ? "Weight Max: " + weightMax + " Kg"
            : "Weight Max: Unknown"}
        </DogWeightMax>
        <DogWeightMax>{life_span}</DogWeightMax>
        <DogTemperaments>
          {temperaments.length ? temperaments : "No temperaments"}
        </DogTemperaments>
        <ButtonsContainer>
          <Link to={"/dog/" + id}>
            <DogBtnDetail>Detail</DogBtnDetail>
          </Link>
          {id.toString().includes("-") ? (
            <DogBtnDelete value={id} onClick={(e) => dogDeleted(e)}>
              Delete
            </DogBtnDelete>
          ) : null}
        </ButtonsContainer>
      </DogInfo>
    </>
  );
}
