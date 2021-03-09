import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSortedData } from "Utils/helpers";
import ListItem from "Components/ListItem";
import {
  ListStyled,
  ListItemsStyled,
  FilterStyled,
} from "./List.styled";

const List = ({ mappedList, isSelected, onCheckboxChange }) => {
  const [filter, setFilter] = useState("last_name");
  const [isFiltered, setIsFiltered] = useState(false);
  const filteredList = getSortedData(mappedList, filter, true);

  useEffect(() => {
    filter && handleFilter();
  }, []);

  const handleFilter = () => {
    setIsFiltered(!isFiltered);
    isFiltered ? setFilter("first_name") : setFilter("last_name");
  };

  return (
    <ListStyled>
      <FilterStyled onClick={handleFilter}>
        Sort by {isFiltered ? `first name` : `last name`}
      </FilterStyled>
      <ListItemsStyled>
        {filteredList.map(({ id, first_name, last_name, avatar }) => (
          <ListItem
            key={id}
            firstName={first_name}
            lastName={last_name}
            imgSrc={avatar}
            imgAlt={last_name}
            isSelected={isSelected}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </ListItemsStyled>
    </ListStyled>
  );
};

List.propTypes = {
  mappedList: PropTypes.array.isRequired,
};

export default List;
