import React from 'react'
import { Link } from 'react-router-dom';
import { 
    Background, 
    AboutContainer, 
    Title, 
    DescriptionContainer, 
    Content, 
    ButtonsContainer, 
    Buttons 
} from "./AboutStyle.js";

const About = () => {
  return (
    <Background>
      <AboutContainer>
        <Title>About This Project</Title>
        <DescriptionContainer>
          <Content>
            This project was made by Ivan Miranda with the purpose of assimilate
            all the modules seen across the Henry's bootcamp. <br />
            With the knowledge acquired, i was able to build and connect the
            Data Base (PostgresSQL - Sequelize), Backend (Node - Express) and
            Frontend (React - Redux) of the present application. <br />
            Hope you like 😄
          </Content>
          <ButtonsContainer>
            <Link to="/">
              <Buttons>Back to Landing</Buttons>
            </Link>
            <Link to="/home">
              <Buttons>Go to Home</Buttons>
            </Link>
          </ButtonsContainer>
        </DescriptionContainer>
      </AboutContainer>
    </Background>
  );
}

export default About