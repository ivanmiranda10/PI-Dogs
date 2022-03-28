import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarLandingStyles";

const NavbarLanding = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <NavIcon onClick={toggle}>
          <p style={{ visibility: "hidden" }}>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default NavbarLanding;
