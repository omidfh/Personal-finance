import { styled } from "styled-components";

import { UseUserSettings } from "../hooks/settings/useUsersSettings";
import { Avatar } from "@mui/material";

const StyledHeader = styled.header`
  background-color: transpatrnt;
  color: #f1f1f1;
  width: 100vw;
  height: 3rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: auto 1rem;
  border-bottom: 1px solid;
  cursor: pointer;
  gap: 1rem;
  & > svg {
    font-size: 1.5rem;
  }
  &:hover {
    border-bottom: thick double;
  }
  transition: all 0.2s;
`;

function Header() {
  const { data, isLoading, error } = UseUserSettings();
  return (
    <StyledHeader>
      {/* <Logo /> */}
      <ProfileSection>
        <p>Wellcome {data?.name}!</p>
        <Avatar alt={data?.name} />
      </ProfileSection>
    </StyledHeader>
  );
}

export default Header;
