import { useDispatch } from 'react-redux';
import { filterByTemperaments, filterByCreation } from '../../redux/actions';

const useFilters = () => {
  
   const dispatch = useDispatch();
    
   const handlerFilterByTemperaments = (e) => {
     dispatch(filterByTemperaments(e.target.value));
   };

   const handlerFilterByCreation = (e) => {
     dispatch(filterByCreation(e.target.value));
   };
   
    return {
        handlerFilterByCreation,
        handlerFilterByTemperaments
    }
}

export default useFilters