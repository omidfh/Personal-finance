import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signIn } from "../api/Auth/SignInApi";
import { useFormContext } from "../FormaDataContext";

import { StyledLabel } from "../ui/FundFormStyles";
import HomeLogo from "../ui/HomeLogo";
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInputs,
  StyledLoginLink,
} from "../ui/LoginStyles";

function Login() {
  const { handleUserId } = useFormContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("omid@test.com");
  const [password, setPassword] = useState("123456789");
  // const [userId, setUserId] = useState("0ecfffbe-c8dc-4948-bf9f-771bfa933936");

  const { isLoading, mutate, data } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate("/");

      toast.success("wellCome Back !");
    },
    onerror: (error) => toast.error(error.message),
  });
  function handleSubmit(e) {
    e.preventDefault();

    mutate({ email, password });
    handleUserId(data.user.id);
  }

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <HomeLogo />
        <h2>Login</h2>
        <StyledLabel>Email</StyledLabel>
        <StyledInputs
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></StyledInputs>
        <StyledLabel>Password</StyledLabel>
        <StyledInputs
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInputs>
        <StyledButton type="submit">login</StyledButton>

        <span style={{ fontSize: "13px" }}>
          create an account{" "}
          <StyledLoginLink to="/register">(Register)</StyledLoginLink>
        </span>
      </StyledForm>
    </StyledDiv>
  );
}

export default Login;
