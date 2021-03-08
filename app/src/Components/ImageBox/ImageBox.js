import React from "react";
import PropTypes from "prop-types";
import {
  ImageBoxStyled,
  ImageStyled,
  UserInitialsStyled,
} from "./ImageBox.styled";

const ImageBox = (
  { imgSrc, imgAlt, className, initials },
  ...rest
) => {
  return (
    <ImageBoxStyled className={className} {...rest}>
      {imgSrc && imgSrc !== null ? (
        <ImageStyled src={imgSrc} alt={imgAlt} />
      ) : (
        <UserInitialsStyled>{initials}</UserInitialsStyled>
      )}
    </ImageBoxStyled>
  );
};

ImageBox.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};

export default ImageBox;
