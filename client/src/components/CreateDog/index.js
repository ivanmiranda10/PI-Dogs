import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemperaments } from '../../redux/actions';
import {
  Background,
  PaddingTop,
  CreateDogContainer,
  Form,
  Title,
  FormInputs,
  
  LabelName,
  InputName,
  
  LabelLifeSpanMin,
  InputLifeSpanMin,
  
  LabelLifeSpanMax,
  InputLifeSpanMax,
  
  LabelWeightMin,
  InputWeightMin,
  
  LabelWeightMax,
  InputWeightMax,
  
  LabelHeightMin,
  InputHeightMin,
  
  LabelHeightMax,
  InputHeightMax,
  
  LabelTemperaments,
  SelectTemperaments,
  TemperamentsList,
  ChosenTemperaments,
  DeleteTempsButton,
  
  SubmitButtonContainer,
  SubmitButton,
  BackButton
} from "./CreateDogStyle.js";
import './Warning.css';
import useForm from './useForm';
import useResetDogsButton from '../../useResetDogsButton';


const CreateDog = () => {
    const {
        input,
        lifeSpan,
        error,
        handleInputChange,
        handleTemperamentSelect,
        handleTemperamentDelete,
        handleSubmit
    } = useForm()
    
    const temperaments = useSelector((state) => state.temperaments)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getTemperaments());
    }, [dispatch]);
    
    const { resetDogs } = useResetDogsButton()

  return (
    <Background>
      <PaddingTop>
        <CreateDogContainer>
          <Form onSubmit={handleSubmit}>
            <Title>Create Your Own Breed!</Title>
            <Link to="/home">
              <BackButton onClick={resetDogs}>Back</BackButton>
            </Link>
            <FormInputs>
              <LabelName>Name: </LabelName>
              <InputName
                type="text"
                className={error.nameErr ? "dangerInput" : "noDanger"}
                name="name"
                placeholder="Enter Name"
                value={input.name}
                onChange={handleInputChange}
              />
              {!input.name || error.nameErr ? (
                <>
                  <label className="signName"> ❗</label>
                  <label className="signName2"> ❗</label>
                </>
              ) : null}
              {error.nameErr ? (
                <p className="dangerWarningName">{error.nameErr}</p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelLifeSpanMin>Life Span Min: </LabelLifeSpanMin>
              <InputLifeSpanMin
                type="number"
                className={error.life_spanMinErr ? "dangerInput" : "noDanger"}
                name="Min"
                value={lifeSpan.Min}
                placeholder="Year"
                onChange={handleInputChange}
              />
              {!input.life_span || error.life_spanMinErr ? (
                <label className="signLifeSpanMin"> ❗</label>
              ) : null}
              {error.life_spanMinErr ? (
                <p className="dangerWarningLifeSpanMin">
                  {error.life_spanMinErr}
                </p>
              ) : null}
              <LabelLifeSpanMax>Life Span Max: </LabelLifeSpanMax>
              <InputLifeSpanMax
                type="number"
                className={error.lifeSpanMaxErr ? "dangerInput" : "noDanger"}
                name="Max"
                value={lifeSpan.Max}
                placeholder="Year"
                onChange={handleInputChange}
              />
              {!input.life_span || error.lifeSpanMaxErr ? (
                <label className="signLifeSpanMax"> ❗</label>
              ) : null}
              {error.lifeSpanMaxErr ? (
                <p className="dangerWarningLifeSpanMax">
                  {error.lifeSpanMaxErr}
                </p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelWeightMin>Weight Min: </LabelWeightMin>
              <InputWeightMin
                type="number"
                className={error.weightMinErr ? "dangerInput" : "noDanger"}
                name="weightMin"
                placeholder="Kg"
                value={input.weightMin}
                onChange={handleInputChange}
              />
              {!input.weightMin || error.weightMinErr ? (
                <label className="signWeightMin"> ❗</label>
              ) : null}
              {error.weightMinErr ? (
                <p className="dangerWarningWeightMin">{error.weightMinErr}</p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelWeightMax>Weight Max: </LabelWeightMax>
              <InputWeightMax
                type="number"
                className={error.weightMaxErr ? "dangerInput" : "noDanger"}
                name="weightMax"
                placeholder="Kg"
                value={input.weightMax}
                onChange={handleInputChange}
              />
              {!input.weightMax || error.weightMaxErr ? (
                <label className="signWeightMax"> ❗</label>
              ) : null}
              {error.weightMaxErr ? (
                <p className="dangerWarningWeightMax">{error.weightMaxErr}</p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelHeightMin>Height Min: </LabelHeightMin>
              <InputHeightMin
                type="number"
                className={error.heightMinErr ? "dangerInput" : "noDanger"}
                name="heightMin"
                placeholder="Cm"
                value={input.heightMin}
                onChange={handleInputChange}
              />
              {!input.heightMin || error.heightMinErr ? (
                <label className="signHeightMin"> ❗</label>
              ) : null}
              {error.heightMinErr ? (
                <p className="dangerWarningHeightMin">{error.heightMinErr}</p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelHeightMax>Height Max: </LabelHeightMax>
              <InputHeightMax
                type="number"
                className={error.heightMaxErr ? "dangerInput" : "noDanger"}
                name="heightMax"
                placeholder="Cm"
                value={input.heightMax}
                onChange={handleInputChange}
              />
              {!input.heightMax || error.heightMaxErr ? (
                <label className="signHeightMax"> ❗</label>
              ) : null}
              {error.heightMaxErr ? (
                <p className="dangerWarningHeightMax">{error.heightMaxErr}</p>
              ) : null}
            </FormInputs>
            <FormInputs>
              <LabelTemperaments>Temperaments (6 Max): </LabelTemperaments>
              <SelectTemperaments onChange={handleTemperamentSelect}>
                <option value="temps">Select Temperaments</option>
                {temperaments?.map((el, index) => {
                  return (
                    <option
                      value={el.name}
                      disabled={input.temperament.length >= 6 ? true : false}
                      key={index}
                    >
                      {el.name}
                    </option>
                  );
                })}
              </SelectTemperaments>
              <TemperamentsList>
                {!input.temperament.includes("No temperaments")
                  ? [...new Set(input.temperament)]
                      .filter((elem) => elem !== "temps")
                      .map((el) => {
                        return (
                          <ChosenTemperaments>
                            <p key={el}>
                              {el + " "}
                              <DeleteTempsButton
                                name={el}
                                onClick={(e) => handleTemperamentDelete(e)}
                              >
                                ❌
                              </DeleteTempsButton>
                            </p>
                          </ChosenTemperaments>
                        );
                      })
                  : input.temperament.length
                  ? input.temperament
                      .splice(0, input.temperament.length, "No temperaments")
                      .filter((el) => el === "No temperaments")
                      .map((elem) => (
                        <p key={elem}>
                          {elem + " "}
                          <DeleteTempsButton
                            name={elem}
                            onClick={(e) => handleTemperamentDelete(e)}
                          >
                            ❌
                          </DeleteTempsButton>
                        </p>
                      ))
                  : [...input.temperament]}
              </TemperamentsList>
            </FormInputs>
            <SubmitButtonContainer>
              <SubmitButton type="submit">Save</SubmitButton>
            </SubmitButtonContainer>
          </Form>
        </CreateDogContainer>
      </PaddingTop>
    </Background>
  );
};

export default CreateDog;
