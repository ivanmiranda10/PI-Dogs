import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";

const useSearch = () => {
  const [dog, setDog] = useState("");
  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getDogByName(dog));
    setDog("");
  };

  return { SubmitHandler, dog, setDog };
};

export default useSearch;
