import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "./redux/actions"


const useResetDogsButton = () => {
    const filterCreation = useSelector((state) => state.filterCreation);
    const filterTemps = useSelector((state) => state.filterTemp);
    const orderName = useSelector((state) => state.orderName);
    const orderWeightMin = useSelector((state) => state.orderWeightMin);
    const orderWeightMax = useSelector((state) => state.orderWeightMax);
    const dog = useSelector((state) => state.oneDog);

    const dispatch = useDispatch();

    const resetButton = () => {
      dispatch(getAllDogs());
      filterCreation?.splice(0, filterCreation.length);
      filterTemps?.splice(0, filterTemps.length);
      orderName?.splice(0, orderName.length);
      orderWeightMin?.splice(0, orderWeightMin.length);
      orderWeightMax?.splice(0, orderWeightMax.length);
      dog?.splice(0, dog.length);
    };
  return {
    resetButton,
    filterCreation,
    filterTemps,
    orderName,
    orderWeightMin,
    orderWeightMax,
    dog
  }
}

export default useResetDogsButton;