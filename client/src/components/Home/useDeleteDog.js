import { useDispatch } from "react-redux";
import { deleteDog, getAllDogs } from "../../redux/actions";

const useDeleteDog = () => {
  const dispatch = useDispatch();

  const handlerDeleteDogs = async (e) => {
    dispatch(deleteDog(e.target.value));
    dispatch(getAllDogs());
  };

  return handlerDeleteDogs;
};

export default useDeleteDog;
