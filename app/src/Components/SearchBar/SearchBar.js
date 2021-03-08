import React from "react";
import PropTypes from "prop-types";

import {
  SearchBarStyled,
  SearchFormStyled,
  SearchInputStyled,
  SearchButtonStyled,
  SearchIcontyled,
  CloseBoxStyled,
  CloseIconStyled,
} from "./SearchBar.styled";

const SearchBar = ({ onSubmit, placeholder, value, onChange, onClose }) => {
  return (
    <SearchBarStyled>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchButtonStyled type="submit">
          <SearchIcontyled />
        </SearchButtonStyled>
        <SearchInputStyled
          type="text"
          name="term"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <CloseBoxStyled onClick={onClose}>
          <CloseIconStyled />
        </CloseBoxStyled>
      </SearchFormStyled>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchBar;
