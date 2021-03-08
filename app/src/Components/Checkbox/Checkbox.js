import React from "react";
import {
  CheckboxWrapperStyled,
  CheckboxStyled,
  LabelStyled,
  IconStyled
} from "./Checkbox.styled";

const Checkbox = ({ className, name, isSelected, onCheckboxChange }) => {
  return (
    <CheckboxWrapperStyled className={className} >
      <LabelStyled htmlFor={name}>{isSelected && <IconStyled />}</LabelStyled>
      <CheckboxStyled
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
    </CheckboxWrapperStyled>
  );
};

export default Checkbox;