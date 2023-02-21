import React, { useState } from "react";
import {
  SearchContainer,
  SearchBarDiv,
  SearchBarInput,
  SearchBtnButton,
} from "./style";

const Searchbar = (props) => {
  const [search, setSearch] = useState();
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };
  return (
    <SearchContainer>
      <SearchBarDiv>
        <SearchBarInput
          placeholder="Buscar Pokemon"
          onChange={onChangeHandler}
        />
      </SearchBarDiv>

      <SearchBtnButton onClick={onButtonClickHandler}>Buscar</SearchBtnButton>
    </SearchContainer>
  );
};

export default Searchbar;
