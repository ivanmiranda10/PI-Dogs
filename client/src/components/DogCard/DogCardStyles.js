import styled from "styled-components";

export const DogInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  background-color: #131212c2;
  height: 260px;
  width: 329px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 3);
`;

export const DogImg = styled.img`
  height: 240px;
  /* min-height: 330px; */
  /* max-height: 60%; */
  width: 322px;
  box-shadow: 8px 8px #f2c16b;
  object-fit: cover;
`;

export const DogName = styled.h2`
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  /* padding-bottom: 0.5rem; */
  color: #fff;
`;

export const DogWeightMin = styled.p`
  margin-top: 0;
  padding-bottom: 0;
  font-size: 0.9rem;
  color: #fff;
`;

export const DogWeightMax = styled.p`
  margin-top: 0;
  padding-bottom: 0;
  font-size: 0.9rem;
  color: #fff;
`;

export const DogTemperaments = styled.p`
  /* margin-bottom: 1rem; */
  color: #fff;
  margin: 0.5rem 0 0.3rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const DogBtnDetail = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  border: none;
  background: #f2c16b;
  color: #000;
  transition: 0.2s ease-out;
  margin-top: 0.5rem;
  margin-right: 0.3rem;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;


export const DogBtnDelete = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.6rem 2.5rem;
  border: none;
  background: #000;
  color: #fff;
  transition: 0.2s ease-out;
  margin-top: 0.5rem;
  margin-left: 0.3rem;

  &:hover {
    background: #ff3636;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
