import React from "react";
import { SearchBarContainer, Form, Input } from "./SearchBarStyle";
import useSearch from "./useSearch";

const SearchBar = ({ setCurrentPage, Loader }) => {
  const { SubmitHandler, dog, setDog } = useSearch();

  const Submitted = (e) => {
    SubmitHandler(e);
    Loader();
    setCurrentPage(1);
  };

  return (
    <SearchBarContainer>
      <Form onSubmit={(e) => Submitted(e)}>
        <Input
          className="input"
          type="text"
          placeholder="Find your dog"
          value={dog}
          onKeyPress={(e) => {
            e.key === "Enter" && !e.target.value.length && e.preventDefault();
          }}
          onChange={(e) => setDog(e.target.value.trimStart())}
        />
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBar;
