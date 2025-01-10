import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  /* max-width: 25px; */
`;
const StyledImage = styled.img`
  max-width: 120px;
  border-radius: 50%;
  background: transparent;
  &:hover {
    box-shadow: 2px 1px 15px #ffffff6d;
  }
  transition: all 1s;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <StyledImage src="./src/assets/logo4.png" alt="logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
