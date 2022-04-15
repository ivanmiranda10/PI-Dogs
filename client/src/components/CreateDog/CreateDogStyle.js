import styled from "styled-components";
// import ImgBg from "../../photos/pexels-eugenio-felix-3015947.jpg";

export const Background = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("https://images.pexels.com/photos/3015947/pexels-photo-3015947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PaddingTop = styled.div`
  /* padding-top: 12.5rem; */
`;

export const CreateDogContainer = styled.div`
  margin: 0 auto;
  width: 1100px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 3.2);
  position: relative;
  border-radius: 10px;
  height: 520px;
  background: linear-gradient(
    rgba(10, 6, 6, 0.884) 0%,
    rgba(10, 10, 10, 0.508) 60%
  );
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  top: 22px;
  font-size: 1.3rem;
  text-align: center;
  /* width: 80%; */
  /* margin-bottom: 1rem; */
  color: #fff;
`;

export const FormInputs = styled.div`
  margin-bottom: 0;
  /* width: 80%; */
`;

// ----------------------- Name y Life Span ----------------------------

export const LabelName = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 3rem;
  right: 49rem;
`;

export const InputName = styled.input`
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 70%;
  /* border: none; */
  /* padding: 0 0 0 55px; */
  position: absolute;
  top: 5.5rem;
  left: 9.5rem;
`;

export const LabelLifeSpanMin = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 9rem;
  right: 35.6rem;
`;

export const InputLifeSpanMin = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  /* padding-left: 85px; */
  position: absolute;
  top: 11.5rem;
  right: 33rem;
`;

export const LabelLifeSpanMax = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 9rem;
  right: 18.8rem;
`;

export const InputLifeSpanMax = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  /* padding-left: 85px; */
  position: absolute;
  top: 11.5rem;
  right: 16.2rem;
`;

// ----------------------------------------------------------------------

// ------------------------------- Weight Min y Weight Max --------------

export const LabelWeightMin = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 14.5rem;
  right: 43rem;
`;

export const InputWeightMin = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  position: absolute;
  top: 17rem;
  right: 40rem;
`;

export const LabelWeightMax = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 21rem;
  right: 43rem;
`;

export const InputWeightMax = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  position: absolute;
  top: 23.5rem;
  right: 40rem;
`;
// ----------------------------------------------------------------------

// ------------------------- Height Min y Height Max ----------------------

export const LabelHeightMin = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 14.5rem;
  right: 12.5rem;
`;

export const InputHeightMin = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  position: absolute;
  top: 17rem;
  right: 9.2rem;
`;

export const LabelHeightMax = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 21rem;
  right: 12.5rem;
`;

export const InputHeightMax = styled.input`
  padding-left: 90px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  /* border: none; */
  position: absolute;
  top: 23.5rem;
  right: 9.2rem;
`;
// -------------------------------------------------------------------------

// --------------------------------- Temperaments --------------------------

export const LabelTemperaments = styled.label`
  font-size: 1.2rem;
  padding-top: 6px;
  color: #fff;
  position: absolute;
  top: 14.5rem;
  right: 26.6rem;
`;

export const SelectTemperaments = styled.select`
  padding-left: 0px;
  outline: none;
  border-radius: 2px;
  height: 35px;
  width: 20%;
  border: none;
  position: absolute;
  top: 17rem;
  right: 24.3rem;
`;

export const TemperamentsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 0;
  color: #fff;
  margin-top: 15.1rem;
  margin-left: 20px;
  font-size: 14px;
`;

export const ChosenTemperaments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5px;
`;

export const DeleteTempsButton = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease-out;
  }
`;
// -------------------------------------------------------------------------

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 25px;
  width: 80%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  background: #f2c16b;

  &:hover {
    cursor: pointer;
    background: #000;
    /* transition: 0.5s ease-in-out; */
  }
`;
export const BackButton = styled.button`
  position: absolute;
  top: 3%;
  right: -2%;
  font-size: 1.5rem;
  z-index: 1;
  /* color: rgb(112, 99, 228); */
  color: #f2c16b;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease-out;
  }
`;
