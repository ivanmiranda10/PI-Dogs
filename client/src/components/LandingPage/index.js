import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLanding from "../NavbarLanding";
import SidebarLanding from "../SidebarLanding";
import {
  LandingContainer,
  LandingContent,
  LandingItems,
  LandingH1,
  LandingP,
  LandingButton,
  ArrowForward,
  ArrowRight
} from "./LandingStyles.js";

export default function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const onHover = () => {
        setHover(!hover);
    };
    
  return (
    <LandingContainer>
      <NavbarLanding toggle={toggle} />
      <SidebarLanding isOpen={isOpen} toggle={toggle} />
      <LandingContent>
        <LandingItems>
          <LandingH1>Welcome!</LandingH1>
          <LandingP>Look for your best friend</LandingP>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <LandingButton
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Let's Go {hover ? <ArrowForward /> : <ArrowRight />}
            </LandingButton>
          </Link>
        </LandingItems>
      </LandingContent>
    </LandingContainer>
  );
}