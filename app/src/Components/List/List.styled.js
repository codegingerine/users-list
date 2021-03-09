import styled, { keyframes } from "styled-components";

export const ListStyled = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const ListItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterStyled = styled.span`
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #7a7a7a;
  font-weight: 400;
  padding: 6px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  background: #fff;
  margin: 0 15px 15px 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #0e0e0e;
    background: #dfdfdf;
  }
`;
