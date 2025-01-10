import HeaderItems from "./HeaderItems";
import styled from "styled-components";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Logo from "./Logo";

const StyledSideBar = styled.aside`
  padding: 3.2rem 1.5rem;
  border-right: 1px solid #f1f1f1;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: ${(props) =>
    !props.show ? " translateX(-95%)" : "translateX(0%)"};
  transition: all 0.2s;
`;

const StyledLogoSection = styled.div`
  dispaly: flex;
  & > p {
    text-align: center;
    color: #f1f1f1;
  }
`;

const StyledSideBarBoutton = styled.div`
  position: absolute;
  cursor: pointer;
  left: ${(props) => (!props.show ? "92%" : "92%")};
  & > svg {
    border: 1px solid #f1f1f1;
    padding: 0.4rem;
    border-radius: 50%;
    color: #000;
    background-color: #f1f1f1;
  }
  transition: all 0.2s;
`;

function SideBar({ sideBarShow, setSideBarShow }) {
  return (
    <StyledSideBar show={sideBarShow}>
      <StyledSideBarBoutton
        onClick={() => setSideBarShow((show) => !show)}
        show={sideBarShow}
      >
        {sideBarShow ? <BsArrowBarLeft /> : <BsArrowBarRight />}
      </StyledSideBarBoutton>
      <StyledLogoSection>
        {sideBarShow && <Logo />}
        <p>Personal Finance</p>
      </StyledLogoSection>
      <HeaderItems />
    </StyledSideBar>
  );
}

export default SideBar;
