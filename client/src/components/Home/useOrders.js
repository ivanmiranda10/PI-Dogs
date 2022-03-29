import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName, orderByWeightMin, orderByWeightMax } from '../../redux/actions';

const useOrders = () => {
   const [order, setOrder] = useState("");
   const dispatch = useDispatch();

   const handlerOrderByName = (e) => {
     dispatch(orderByName(e.target.value));
     setOrder(`Ordenado ${e.target.value}`);
     console.log(order);
   };

   const handlerOrderByWeightMin = (e) => {
     dispatch(orderByWeightMin(e.target.value));
     setOrder(`Ordenado ${e.target.value}`);
   };

   const handlerOrderByWeightMax = (e) => {
     dispatch(orderByWeightMax(e.target.value));
     setOrder(`Ordenado ${e.target.value}`);
   };
   
   return {
       handlerOrderByName,
       handlerOrderByWeightMin,
       handlerOrderByWeightMax
   }
}

export default useOrders;