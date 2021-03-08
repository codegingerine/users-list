import styled, { css } from "styled-components";
import { ReactComponent as Tick } from "Assets/svg/tick.svg";

export const CheckboxWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-left: 10px;
`;

export const CheckboxStyled = styled.input`
  width: 12px;
  height: 12px;
  background: #fff;
  border: 1px solid #757575;
  margin: 0;
  background: none;
  z-index: 1;
`;

const labelMix = css`
  display: blok;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
`;

export const LabelStyled = styled.label`
  ${labelMix}
`;

export const IconStyled = styled(Tick)`
  ${labelMix}
`;
