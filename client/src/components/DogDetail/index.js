import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDogDetail } from "../../redux/actions";
import {
  DogDetailBackground,
  DogDetailContainer,
  DogTitle,
  DogImage,
  DogTemperaments,
  DogWeight,
  DogHeight,
  DogLifeSpan,
  BtnContainer,
  BackButton,
  LoadingContainer
} from "./DogDetailStyle.js";
import FadeLoader from "react-spinners/FadeLoader";
import useResetDogsButton from "../../useResetDogsButton";
import useLoading from "../Loading";
import useScrollTop from "../Home/useScrollTop";

const DogDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector((state) => state.dogDetail)
    
    useEffect(() => {
        console.log(id)
        dispatch(getDogDetail(id))
    }, [dispatch, id])
    
    const ScrollToTopOnMount = useScrollTop();
    const { resetButton } = useResetDogsButton();
    const { loading } = useLoading()

  return (
    <DogDetailBackground>
      <ScrollToTopOnMount />
      <DogTitle loading={loading}>{details?.name}</DogTitle>
      {loading ? (
        <DogDetailContainer loading={loading}>
          <DogImage
            src={details?.image}
            alt="img not found"
            width="400px"
            height="150px"
          />
          <DogTemperaments>
            {!details.createdInDB
              ? details?.temperament
              : details?.temperaments?.length
              ? details.temperaments
                  .map((el) => {
                    return el.name;
                  })
                  .join(", ")
              : "No temperaments"}
          </DogTemperaments>
          <DogWeight>
            {details?.weightMin
              ? "Weight Min: " + details.weightMin + " Kg"
              : "Weight Min: Unknown"}
          </DogWeight>
          <DogWeight>
            {details?.weightMax
              ? "Weight Max: " + details.weightMax + " Kg"
              : "Weight Max: Unknown"}
          </DogWeight>
          <DogHeight>
            {details?.heightMin || details.heightMin !== 0
              ? "Height Min: " + details.heightMin + "cm"
              : "Height Min: Unknown"}
          </DogHeight>
          <DogHeight>
            {details?.heightMax || details.heightMax !== 0
              ? "Height Max: " + details.heightMax + "cm"
              : "Height Max: Unknown"}
          </DogHeight>
          <DogLifeSpan>{"Life Span: " + details?.life_span}</DogLifeSpan>
        </DogDetailContainer>
      ) : (
        <LoadingContainer>
          <FadeLoader color="#000" />
        </LoadingContainer>
      )}
      <BtnContainer loading={loading}>
        <Link to="/home">
          <BackButton onClick={resetButton}>Back</BackButton>
        </Link>
      </BtnContainer>
    </DogDetailBackground>
  );
};

export default DogDetail;
