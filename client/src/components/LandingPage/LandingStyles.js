import styled from "styled-components";
// import ImgBg from "../../../../client/src/photos/pexels-chevanon-photography-1108099.jpg";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const LandingContainer = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0.2, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const LandingContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const LandingItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-height: 100%;
  padding: 0 6rem;
  width: 1250px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  padding-top: 15rem;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const LandingH1 = styled.h1`
  font-size: clamp(4rem, 10vw, 4rem);
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  box-shadow: 5px 5px #f2c16b;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const LandingP = styled.p`
  font-size: clamp(1.5rem, 1.5vw, 2rem);
  margin: 0 0.3rem;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LandingButton = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#f2c16b" : "#f2c16b")};
  white-space: nowrap;
  margin: 1rem 6rem;
  padding: ${({ big }) => (big ? "14px 48px" : "10px 20px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#fff")};
    color: #000;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
