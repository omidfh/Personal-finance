import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.show ? "15rem 1fr" : "8rem 1fr")};
  grid-template-rows: auto 1fr;
  height: 100%;
  transition: all 0.2s;
`;

const Main = styled.main`
  padding: 1rem 4rem;
  over-flow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledOutLet = styled(Outlet)`
  height: 100%;
`;

function AppLayout() {
  const [sideBarShow, setSideBarShow] = useState(false);
  return (
    <StyledAppLayout show={sideBarShow}>
      <Header />
      <SideBar sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
      <Main>
        <Container>
          <StyledOutLet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
