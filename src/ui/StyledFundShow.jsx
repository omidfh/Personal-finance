import { styled } from "styled-components";

export const StyledMainStatus = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 15px;
  flex-direction: row;
`;

export const StyledFundDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f1f1f1;
  border-bottom: 1px solid #fff;

  transition: all 0.2s;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export const StyledLabelFund = styled.label`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
  filter: drop-shadow(0 0 0.2rem #0d0d0d14);
`;
