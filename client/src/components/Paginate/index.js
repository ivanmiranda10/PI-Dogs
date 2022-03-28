import React from 'react';
import { Nav, PaginateContainer, LinkButton } from './paginateStyle';

export default function Paginate({ dogsPerPage, dogs, paginate}) {
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(dogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
      <Nav>
        <PaginateContainer>
          {pageNumbers?.map((number) => {
            return (
              <LinkButton
                key={number}
                className="link"
                onClick={() => paginate(number)}
              >
                {number}
              </LinkButton>
            );
          })}
        </PaginateContainer>
      </Nav>
    );
}
