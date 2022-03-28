import React from 'react';
import { SearchBarContainer, Form, Input } from './SearchBarStyle';
import useSearch from './useSearch';

const SearchBar = () => {
  const { SubmitHandler, dog, setDog } = useSearch();
  return (
    <SearchBarContainer>
      <Form onSubmit={SubmitHandler}>
        <Input
          className="input"
          type="text"
          placeholder="Find your dog"
          value={dog}
          onChange={(e) => setDog(e.target.value)}
        />
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBar;
