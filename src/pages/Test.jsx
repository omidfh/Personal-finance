import { useEffect } from "react";
// import { loadData } from "../services/loadDataTest";
import { signIn } from "../api/Auth/SignInApi";

function Test() {
  const userEmail = "test@test.test";
  const userPassword = "123456789";
  function handleClick(e) {
    e.preventDefault();

    // Log in to get the user ID
    signIn({ userEmail, userPassword });
  }
  return (
    <button onClick={handleClick}>
      click
      {/* Data will be logged to console */}
    </button>
  );
}

export default Test;
