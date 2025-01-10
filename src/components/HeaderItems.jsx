import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";

import { AiOutlineFileSearch } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";

// Create a styled ul tag
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.2rem;
`;

// Create a styled li tag
const StyledLi = styled.li`
  float: left;
`;

// Create a styled Link
const StyledLink = styled(Link)`
  display: block;
  color: #f1f1f1;
  padding: 14px 8px;
  margin: auto;
  text-decoration: none;
  border: none;
  border-left: ${(props) => props.show && "1px solid #fff"};
  &:hover {
    border-left: 1px solid #eee;
    padding-left: 10px;
  }
  transition: all 0.2s ease;
`;
const StyledIcon = styled.span`
  & > svg {
    margin: 0 10px -3px 0px;
  }
`;

function HeaderItems() {
  const loc = useLocation();
  console.log(loc.pathname);
  return (
    <StyledUl>
      <StyledLi>
        <StyledLink to="/" show={loc.pathname === "/"}>
          <StyledIcon>
            <RxDashboard />
          </StyledIcon>
          <span>Dashboard</span>
        </StyledLink>
      </StyledLi>

      <StyledLi>
        <StyledLink to="/Reports" show={loc.pathname === "/Reports"}>
          {" "}
          <StyledIcon>
            <AiOutlineFileSearch style={{ fontSize: "1.2rem" }} />
          </StyledIcon>
          <span>Reports</span>
        </StyledLink>
      </StyledLi>

      <StyledLi>
        <StyledLink to="/transactions" show={loc.pathname === "/transactions"}>
          <StyledIcon>
            <GrTransaction />
          </StyledIcon>
          <span>Transactions</span>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default HeaderItems;
