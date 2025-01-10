import { styled } from "styled-components";

export const FundForm = styled.form`
  border-radius: 8px;
  display: flex;
  align-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #e9f9fd;
  margin: 20px auto;
  width: 50%;
  height: auto;
  padding: 2rem;
  box-shadow: 2px 1px 20px #0000002a;
  &:hover {
    box-shadow: 2px 1px 10px grey;
  }
  transition: all 0.5s;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
  filter: drop-shadow(0 0 0.2rem #0d0d0d14);
`;
export const FundInput = styled.input`
  display: block;
  width: 60%;
  margin: 12px 0;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  &:hover {
    box-shadow: 2px 1px 10px grey;
  }
  transition: all 0.5s;
`;
