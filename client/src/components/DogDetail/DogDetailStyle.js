import styled from "styled-components";
// import ImgBg from "../../photos/pexels-jozef-fehér-969381.jpg";

export const DogDetailBackground = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("https://images.pexels.com/photos/969381/pexels-photo-969381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

export const DogDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem;
  background: #131212c2;
  margin: auto;
  flex-wrap: wrap;
  box-shadow: 0 10px 30px #000;
  border-radius: 30px;
  font-size: 17px;
  max-width: 900px;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};
`;

export const DogTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 45px;
  padding-bottom: 1rem;
  color: #000;
  font-weight: bold;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};
`;

export const DogTemperaments = styled.h3`
  display: flex;
  text-align: center;
  margin: 1rem 0;
  color: #fff;
`;

export const DogWeight = styled.h3`
  padding-bottom: 1rem;
  color: #fff;
`;

export const DogHeight = styled.h3`
  padding-bottom: 1rem;
  color: #fff;
`;

export const DogImage = styled.img`
  height: 300px;
  min-height: 300px;
  max-height: 100%;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 3);
  object-fit: fill;
`;

export const DogLifeSpan = styled.h3`
  margin-bottom: 1rem;
  color: #fff;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};
`;

export const BackButton = styled.button`
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

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  padding-bottom: 25rem;
`;
