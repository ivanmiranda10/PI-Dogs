import React from 'react';
import CardDog from '../DogCard';
import useDeleteDog from '../Home/useDeleteDog';
import { Cards } from './CardsStyle';

const CardsDisplay = ({ currentDogs }) => {
  const handlerDeleteDogs = useDeleteDog();
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
              temperaments={ el.temperament || el.temperaments.map((temp) => temp.name).join(", ") }
              id={el.id}
              handlerDeleteDogs={handlerDeleteDogs}
            />
          </Cards>
        );
      })}
    </>
  );
}

export default CardsDisplay;