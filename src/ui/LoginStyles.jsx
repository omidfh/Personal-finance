import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledForm = styled.form`
  margin: auto 20px;
  background-color: #e7f7fd;
  border-radius: 8px;
  padding: 15px;
  width: 40%;
  display: grid;
  justify-items: center;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-wieght: 600;
  margin: 10px auto;
`;

export const StyledInputs = styled.input`
  padding: 6px 20px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 5px auto;
  text-align: center;
  transition: all 0.3s;
  width: 55%;
  &:hover,
  &:focus {
    padding: 6px 25px;
    border: 1px solid lightblue;
  }
`;

export const StyledButton = styled.button`
  background-color: #78b7ff;
  margin: 15px auto;
  width: 8rem;
  height: 3rem;
  color: #2d2d2d;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05rem;
  border-radius: 15px;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  outline: none;
  &:hover {
    background-color: #03b140;
    color: #fff;
  }
  &:focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #78b7ff;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
export const StyledLoginLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
`;
