import React from "react";
import { useDispatch } from "react-redux";
import CardDog from "../DogCard";
import { getAllDogs } from "../../redux/actions";

import useDeleteDog from "../Home/useDeleteDog";
import { Cards } from "./CardsStyle";

const CardsDisplay = ({ currentDogs, Loader, resetPage }) => {
  const handlerDeleteDogs = useDeleteDog();
  const dispatch = useDispatch();

  const deleteAction = (e) => {
    handlerDeleteDogs(e).then(() => dispatch(getAllDogs()));
    Loader();
  };
  return (
    <>
      {currentDogs?.map((el, index) => {
        return (
          <Cards key={index}>
            <CardDog
              image={el.image}
              name={el.name}
              weightMin={el.weightMin}
              weightMax={el.weightMax}
              temperaments={
                el.temperament ||
                el.temperaments.map((temp) => temp.name).join(", ")
              }
              id={el.id}
              deleteAction={deleteAction}
              resetPage={resetPage}
            />
          </Cards>
        );
      })}
    </>
  );
};

export default CardsDisplay;
