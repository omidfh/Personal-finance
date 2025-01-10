import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh; // Ensures it takes at least the full viewport height
  padding: 20px;
  overflow-y: auto; // Allows scrolling if content overflows
`;

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd; // Visual separator

  @media (max-width: 700px) {
    grid-template-columns: 1fr; // Stack elements in a single column on smaller screens
    text-align: center;
    p {
      font-size: 12px;
    }
  }

  p {
    margin: 0;
    // Resets default margin
  }
`;

export const TransactionItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
  gap: 10px;
  padding: 10px 0;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 5px; // Reduced gap for smaller screens
    & > p:not(:first-of-type) {
      padding-left: 20px;
    }
    p {
      font-size: 12px;
      font-weight: 700;
      max-width: 6em;
      overflow: hidden;
    }
  }

  p {
    /* margin: 0; */
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  padding: 5px;
  color: #333; // Choose a color that fits your design
  font-size: 1em;

  &:hover {
    color: #007bff; // Highlight color on hover
  }

  svg {
    margin-right: 5px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // Space between action buttons
  flex-direction: row;

  @media (max-width: 700px) {
    // Ensures buttons are easily accessible on smaller screens
    gap: 0;
    flex-direction: column;
    font-size: 0.8em;
  }
`;
