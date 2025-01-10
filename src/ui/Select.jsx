import styled, { css } from "styled-components";

export const Select = styled.select`
  ${(props) =>
    props.type === "currency" &&
    css`
      border: 2px solid #108a00c1;
      color: #02864b;
      &:hover {
        border-color: #00b35a;
      }
      &:focus {
        outline: none;
        border-color: #005b2e;
      }
    `}
  ${(props) =>
    props.type === "priority" &&
    css`
      border: 2px solid #007bff;
      color: #007bff;
      &:hover {
        border-color: #0056b3;
      }
      &:focus {
        outline: none;
        border-color: #00375b;
      }
    `}
  text-align: center;
  width: 200px;
  height: 40px;
  border-radius: 20px;

  background-color: white;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path fill="%23007bff" d="M2048 384v128H0V384h2048zm0 640V896H0v128h2048zm0 640v-128H0v128h2048z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
`;
