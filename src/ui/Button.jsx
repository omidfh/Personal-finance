import styled, { css } from "styled-components";

const StyledButton = styled.button`

${(props) =>
  props.type === "submit" &&
  css`
    &:hover {
      color: #fff;
    }
    &:focus {
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #78b7ff;
    }
  `}

${(props) =>
  props.type === "reset" &&
  css`
    background-color: #ff8a78;
    &:hover {
      background-color: #b10303;
      color: #fff;
    }
    &:focus {
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #ffb578;
    }
  `}
  margin : 10px 10px; 
  height: 4rem; 
 

  font-size: 16px; 
  font-weight: 600; 
  letter-spacing: 0.05rem; 

  border: none; 
  padding: 0.5rem 1.2rem; 
  cursor: pointer; 
  transition: all 0.3s ease-in-out;  */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  outline: none; 



  &:active {
    transform: scale(0.95); 
  }

  background-color: transparent;
  color: #f1f1f1;


`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
