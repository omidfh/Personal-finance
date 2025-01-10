import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for NoData
const NoDataContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #666;
`;

const NavigateButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function NoData({ pageName, children, path }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigate = () => {
    // Navigate to the specified page
  };

  return (
    <NoDataContainer>
      <Message>{children}</Message>
      {pageName && path && (
        <NavigateButton onClick={() => navigate(path)}>
          Go to {pageName}
        </NavigateButton>
      )}
    </NoDataContainer>
  );
}

export default NoData;
