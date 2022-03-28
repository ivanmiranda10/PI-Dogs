import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePaginate = () => {
  const dogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return {
    dogs,
    setCurrentPage,
    dogsPerPage,
    currentDogs,
    paginate
  }
}

export default usePaginate