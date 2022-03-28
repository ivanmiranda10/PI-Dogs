import { useDispatch } from 'react-redux';
import { filterByTemperaments, filterByCreation } from '../../redux/actions';
import usePaginate from './usePaginate';

const useFilters = () => {
  
   const dispatch = useDispatch();
   const { setCurrentPage } = usePaginate();
    
   const handlerFilterByTemperaments = (e) => {
     dispatch(filterByTemperaments(e.target.value));
     setCurrentPage(1);
   };

   const handlerFilterByCreation = (e) => {
     dispatch(filterByCreation(e.target.value));
     setCurrentPage(1);
   };
   
    return {
        handlerFilterByCreation,
        handlerFilterByTemperaments
    }
}

export default useFilters