import styled, { keyframes } from "styled-components";

// Keyframes for the spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the Loader
const StyledLoader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2); // Light grey border
  border-top: 4px solid #3498db; // Blue border for the top part
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
  margin: 20px auto; // Center the loader
`;

// Loader component
function Loader() {
  return <StyledLoader />;
}

export default Loader;
