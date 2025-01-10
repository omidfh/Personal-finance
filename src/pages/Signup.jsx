import { StyledLabel } from "../ui/FundFormStyles";
import HomeLogo from "../ui/HomeLogo";
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInputs,
  StyledLoginLink,
} from "../ui/LoginStyles";

function Signup() {
  return (
    <StyledDiv>
      <StyledForm>
        <HomeLogo />
        <h2>Signup</h2>
        <StyledLabel>Email</StyledLabel>
        <StyledInputs type="email" placeholder="Email"></StyledInputs>
        <StyledLabel>Password</StyledLabel>
        <StyledInputs type="password" placeholder="password"></StyledInputs>
        <StyledButton type="submit">signup</StyledButton>
        <span style={{ fontSize: "13px" }}>
          have an account?{" "}
          <StyledLoginLink to="/login">(Login)</StyledLoginLink>
        </span>
      </StyledForm>
    </StyledDiv>
  );
}

export default Signup;
