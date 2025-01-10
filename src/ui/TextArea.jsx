import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%; /* Full width to match the form's width */
  padding: 10px; /* Adequate padding for text input */
  margin-top: 5px; /* Margin to separate from other form elements */
  border-radius: 5px; /* Rounded corners for a modern look */
  border: 1px solid #ccc; /* Subtle border matching the theme */
  box-sizing: border-box; /* Ensures padding does not affect the overall size */
  min-height: 100px; /* Minimum height to accommodate multiline texts */
  resize: vertical; /* Allows vertical resizing to fit more text if needed */
  font-family: inherit; /* Ensures the text area uses the same font as the rest of the form */
  font-size: 16px; /* Font size that's easy to read */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth, optional */

  &:focus {
    border-color: #007bff; /* Highlight effect when focused */
    outline: none; /* Removes the default focus outline */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); /* Adds a glow effect on focus for better visibility and accessibility */
  }
`;
