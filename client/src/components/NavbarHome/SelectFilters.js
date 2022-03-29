import React from "react";
import "./SelectFilters.css";

const SelectFilters = ({
  handlerFilterByTemperaments,
  handlerFilterByCreation,
  handlerOrderByName,
  handlerOrderByWeightMin,
  handlerOrderByWeightMax,
  temperaments,
  setCurrentPage
}) => {
     const creationFilter = (e) => {
       handlerFilterByCreation(e);
       setCurrentPage(1);
     };
     const temperamentFilter = (e) => {
       handlerFilterByTemperaments(e);
       setCurrentPage(1);
     };
     const nameOrder = (e) => {
       handlerOrderByName(e);
       setCurrentPage(1);
     };
     const weightMinOrder = (e) => {
       handlerOrderByWeightMin(e);
       setCurrentPage(1);
     };
     const weightMaxOrder = (e) => {
       handlerOrderByWeightMax(e);
       setCurrentPage(1);
     };  
  return (
    <>
      <div className="select">
        <button className="dropBtn">Origin</button>
        <section
          className="dropdown-content"
          onClick={(e) => creationFilter(e)}
        >
          <option value="created">Created</option>
          <option value="api">Existent</option>
          <option value="all">All</option>
        </section>
      </div>
      <div className="select">
        <button className="dropBtn">Name</button>
        <section className="dropdown-content" onClick={(e) => nameOrder(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </section>
      </div>
      <div className="select">
        <button className="dropBtn">Weight Min</button>
        <section
          className="dropdown-content-weight"
          onClick={(e) => weightMinOrder(e)}
        >
          <option value="+WeightMin">Major Weight Min</option>
          <option value="-WeightMin">Minor Weight Min</option>
        </section>
      </div>
      <div className="select">
        <button className="dropBtn">Weight Max</button>
        <section
          className="dropdown-content-weight"
          onClick={(e) => weightMaxOrder(e)}
        >
          <option value="+WeightMax">Major Weight Max</option>
          <option value="-WeightMax">Minor Weight Max</option>
        </section>
      </div>
      <div className="select">
        <button className="dropBtn">Temperaments</button>
        <section
          className="dropdown-content-temperaments"
          onClick={(e) => temperamentFilter(e)}
        >
          <option value="allTemps">All Temperaments</option>
          {temperaments?.map((el, index) => {
            return (
              <option value={el.name} key={index}>
                {el.name}
              </option>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default SelectFilters;
