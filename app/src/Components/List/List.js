import React from "react";
import PropTypes from "prop-types";
import ListItem from "Components/ListItem";
import { ListStyled } from "./List.styled";

const List = ({ mappedList, isSelected, onCheckboxChange }) => {
  return (
    <ListStyled>
      {mappedList.map(({ id, first_name, last_name, avatar }) => (
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
    </ListStyled>
  );
};

List.propTypes = {
  mappedList: PropTypes.array.isRequired,
};

export default List;
