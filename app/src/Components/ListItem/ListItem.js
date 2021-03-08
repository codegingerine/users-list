import React from "react";
import PropTypes from "prop-types";

import {
  ListItemStyled,
  ItemContentStyled,
  ItemTextStyled,
} from "./ListItem.styled";

const ListItem = ({ firstName, lastName }) => {
  return (
    <ListItemStyled>
      <ItemContentStyled>
        <ItemTextStyled>{firstName}{"\u00a0"}</ItemTextStyled>
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
