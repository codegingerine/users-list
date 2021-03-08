import React from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";
import Checkbox from "Components/Checkbox";

import {
  ListItemStyled,
  ItemContentStyled,
  ItemTextStyled,
} from "./ListItem.styled";

const ListItem = (
  { firstName, lastName, imgSrc, imgAlt, isSelected, onCheckboxChange },
  ...rest
) => {
  return (
    <ListItemStyled {...rest}>
      <ImageBox
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        initials={`${firstName.charAt(0)}${lastName.charAt(0)}`}
      />
      <ItemContentStyled>
        <ItemTextStyled>
          {firstName}
          {"\u00a0"}
        </ItemTextStyled>
        <ItemTextStyled>{lastName}</ItemTextStyled>
      </ItemContentStyled>
      <Checkbox isSelected={isSelected} onCheckboxChange={onCheckboxChange} />
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ListItem;
