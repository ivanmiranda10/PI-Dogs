import React from "react";
import {
  Nav,
  NavBarContainer,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarHomeStyle.js";
import SelectFilters from "./SelectFilters.js";
import SearchBar from "../SearchBar/index.js";

const NavbarHome = ({
  handlerFilterByTemperaments,
  handlerFilterByCreation,
  handlerOrderByName,
  handlerOrderByWeightMin,
  handlerOrderByWeightMax,
  temperaments,
  setCurrentPage,
  Loader
}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavBtn>
            <NavBtnLink to="/dog">Create</NavBtnLink>
          </NavBtn>
          <NavMenu>
            <SelectFilters
              handlerFilterByTemperaments={handlerFilterByTemperaments}
              handlerFilterByCreation={handlerFilterByCreation}
              handlerOrderByName={handlerOrderByName}
              handlerOrderByWeightMin={handlerOrderByWeightMin}
              handlerOrderByWeightMax={handlerOrderByWeightMax}
              temperaments={temperaments}
              setCurrentPage={setCurrentPage}
            />
          </NavMenu>
          <SearchBar setCurrentPage={setCurrentPage} Loader={Loader} />
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavbarHome;
