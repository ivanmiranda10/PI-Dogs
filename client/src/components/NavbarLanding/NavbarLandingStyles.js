import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 30px;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  &:hover {
    color: #f2c16b;
  }
`;
// icon bar
export const Bars = styled(FaBars)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
