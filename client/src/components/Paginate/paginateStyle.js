import styled from 'styled-components';


export const Nav = styled.nav``

export const PaginateContainer = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.50rem;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0;
`

export const LinkButton = styled.button`
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem;
  line-height: 1.25;
  color: #fff;
  background-color: #444444;
  border: 1px solid gray;

  &:hover {
    z-index: 99;
    color: black;
    text-decoration: none;
    background-color: #f2c16b;
    border-color: #dee2e6;
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;