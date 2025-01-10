import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled.img`
  max-width: 100px;
  background: transparent;
`;

function HomeLogo() {
  return (
    <StyledDiv>
      <StyledImage src="./src/assets/logo.png" alt="main-logo" />
    </StyledDiv>
  );
}

export default HomeLogo;
