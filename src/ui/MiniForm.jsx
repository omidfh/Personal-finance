import { HiMiniXMark } from "react-icons/hi2";
import { styled } from "styled-components";

import TransactionForm from "../pages/TransactionForm";
import { useFormContext } from "../FormaDataContext";

const StyledMiniForm = styled.div`
  background: rgba(255, 255, 255, 0.5)
  width: 100vh;

  overflow-y: auto;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #4242422d;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f13f;
  border-radius: #acacac;
  box-shadow: 1px;
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;
const StyledCloseButton = styled.button`
  position: absolute;
  top: 7%;
  left: 75%;
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  color: #360000;
`;

function MiniForm({ formData, setIsEditing, isEditing }) {
  console.log(formData);

  return (
    <Overlay>
      <StyledModal>
        <StyledCloseButton onClick={(e) => setIsEditing(false)}>
          <HiMiniXMark />
        </StyledCloseButton>
        <TransactionForm
          isEditing={isEditing}
          initialData={formData}
          setIsEditing={setIsEditing}
        />
      </StyledModal>
    </Overlay>
  );
}

export default MiniForm;
