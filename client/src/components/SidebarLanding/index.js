import React from "react";
import { Link } from "react-router-dom";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarLandingStyles";

const SidebarLanding = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/home">Home</SideBarLink>
        <SideBarLink to="/dog">Create</SideBarLink>
        <SideBarLink to="/about">About</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
          <Link to='/home'>
              <SideBarRoute to="/home">Begin!</SideBarRoute>
          </Link>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default SidebarLanding;
