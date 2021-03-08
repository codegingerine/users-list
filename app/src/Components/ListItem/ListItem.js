import React from "react";
import PropTypes from "prop-types";
import ImageBox from "Components/ImageBox";

import {
  ListItemStyled,
  ItemContentStyled,
  ItemTextStyled,
} from "./ListItem.styled";

const ListItem = ({ firstName, lastName, imgSrc, imgAlt }, ...rest) => {
  return (
    <ListItemStyled {...rest}>
      <ImageBox imgSrc={imgSrc} imgAlt={imgAlt} />
      <ItemContentStyled>
        <ItemTextStyled>
          {firstName}
          {"\u00a0"}
        </ItemTextStyled>
        <ItemTextStyled>{lastName}</ItemTextStyled>
      </ItemContentStyled>
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ListItem;
