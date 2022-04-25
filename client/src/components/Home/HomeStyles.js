import styled from "styled-components";
// import ImgBg from "../../../../client/src/photos/pexels-tina-nord-7324407.jpg";

export const HomeContainer = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    url("https://images.pexels.com/photos/7324407/pexels-photo-7324407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const DogsContainer = styled.div`
  min-height: 100vh;
`;

export const PagUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background-color: #131212c2;
  height: 120px;
  width: auto;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};
`;

export const PagBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  text-align: center;
  background-color: #131212c2;
  height: 120px;
  width: auto;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};
`;

export const DogsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 2rem;
`;

export const BackLanding = styled.button`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 5px 8px;
  border-radius: 13px;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    color: #000;
    font-weight: bolder;
  }
`;

export const ResetButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResetDogsButton = styled.button`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 7px 13px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  visibility: ${({ loading }) => (!loading ? "hidden" : "visible")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #979797;
    color: #fff;
  }
`;
