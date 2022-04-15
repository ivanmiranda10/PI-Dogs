import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`;

export const Form = styled.form``;

export const Input = styled.input`
  font-weight: bold;
  border: none;
  border-radius: 25px;
  text-align: center;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #f2c16b;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;
