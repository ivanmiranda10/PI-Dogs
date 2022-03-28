import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


export const SideBarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 350px;
 height: 100%;
 background: black;
 font-weight: bold;
 display: grid;
 align-items: center;
 top: 0;
 transition: 0.3s ease-in-out;
 left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
 
 @media screen and (max-width: 400px){
    width: 100%
 }
`


export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 border: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #f2c16b;
  }
`;


export const SideBarMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(3, 80px);
 text-align: center;
 
 @media screen and (max-width: 480px){
    grid-template-rows: repeat(3, 60px);
 }
`


export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f2c16b;
    transition: 0.2s ease-in-out;
  }
`;


export const SideBtnWrap = styled.div`
 display: flex;
 justify-content: center;
`


export const SideBarRoute = styled.button`
  background: #f2c16b;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border-radius: 50px;
  border-width: 0em;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #000;
    font-weight: bold;
  }
`;