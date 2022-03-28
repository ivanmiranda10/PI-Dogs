import styled from "styled-components";
import Img from '../../photos/pexels-lumn-406014.jpg';

export const Background = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${Img});
  background-size: "cover";
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  padding-top: 0.5rem; 
  color: #000;
`

export const DescriptionContainer = styled.div`
  /* margin: 0 auto; */
  width: 900px;
  /* box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 3.2); */
  position: relative;
  border-radius: 10px;
  height: 180px;
  background: linear-gradient(rgba(10, 6, 6, 0.484) 0%, rgba(10, 10, 10, 0.508) 60%);
`

export const Content = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  padding: 0 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1.5rem;
`

export const Buttons = styled.button`
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 5px 8px;
  
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    font-weight: bold;
  }
`