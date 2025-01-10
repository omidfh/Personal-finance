import { supabase } from "../supabase";
export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Your Email or Password is Not Correct");
  }

  return data;
}
