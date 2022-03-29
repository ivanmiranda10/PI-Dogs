import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDogs, getTemperaments } from '../../redux/actions';
import Paginate from '../Paginate';
import NavbarHome from '../NavbarHome';
import CardsDisplay from '../CardsDisplay';
import {
  HomeContainer,
  DogsContainer,
  PagUpperContainer,
  PagBottomContainer,
  DogsWrapper,
  BackLanding,
  ResetDogsButton
} from "./HomeStyles";
import FadeLoader from "react-spinners/FadeLoader";
import useLoading from '../Loading';
import useResetDogsButton from '../../useResetDogsButton';
import useFilters from './useFilters';
import useOrders from './useOrders';
import useScrollTop from './useScrollTop';


export const Home = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const { loading, Loader } = useLoading();
  
  const {
    resetButton,
    filterCreation,
    filterTemps,
    orderName,
    orderWeightMin,
    orderWeightMax,
    dog,
  } = useResetDogsButton();
   
   const {
      handlerFilterByCreation,
      handlerFilterByTemperaments
   } = useFilters();
   
   const {
     handlerOrderByName,
     handlerOrderByWeightMin,
     handlerOrderByWeightMax,
   } = useOrders();
  
  const ScrollToTopOnMount = useScrollTop();
  
  const resetPage = () => {
      resetButton()
      setCurrentPage(1)
      Loader()
  }

  return (
    <HomeContainer>
      <ScrollToTopOnMount />
      <NavbarHome
        handlerFilterByTemperaments={handlerFilterByTemperaments}
        handlerFilterByCreation={handlerFilterByCreation}
        handlerOrderByName={handlerOrderByName}
        handlerOrderByWeightMin={handlerOrderByWeightMin}
        handlerOrderByWeightMax={handlerOrderByWeightMax}
        temperaments={temperaments}
        setCurrentPage={setCurrentPage}
        Loader={Loader}
      />
      <PagUpperContainer loading={loading}>
        <Link to="/">
          <BackLanding onClick={resetPage}>Go Back</BackLanding>
        </Link>
        <Paginate
          dogsPerPage={dogsPerPage}
          dogs={dogs.length}
          paginate={paginate}
        />
      </PagUpperContainer>
      {
        (filterCreation.length && filterCreation.length <= 172) 
        || filterTemps.length 
        || orderName.length 
        || orderWeightMin.length 
        || orderWeightMax.length 
        || dog.length 
        ? 
        <ResetDogsButton onClick={resetPage} loading={loading}>
          Reset Dogs
        </ResetDogsButton>
        : 
        null
      }
      <DogsContainer>
        <DogsWrapper>
          { loading ? <CardsDisplay currentDogs={currentDogs} /> : <FadeLoader color="#000" /> }
        </DogsWrapper>
      </DogsContainer>
      <PagBottomContainer loading={loading}>
        <Paginate
          dogsPerPage={dogsPerPage}
          dogs={dogs.length}
          paginate={paginate}
        />
      </PagBottomContainer>
    </HomeContainer>
  );
};

export default Home;
