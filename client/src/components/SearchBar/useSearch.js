import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions';
import usePaginate from "../Home/usePaginate";

const useSearch = () => {
  const [dog, setDog] = useState("");
  const dispatch = useDispatch();
  const { setCurrentPage } = usePaginate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getDogByName(dog));
    setDog("");
    setTimeout(() => {
      setCurrentPage(1);
    }, 1000);
  };
  
  return { SubmitHandler, dog, setDog }
}

export default useSearch