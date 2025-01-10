import { supabase } from "./supabase";

export async function getUserSettings(userId) {
  const { data, error } = await supabase
    .from("usersSetting")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getUserId() {
  const { data: userId, error } = await supabase
    .from("usersSetting")
    .select("user_id");

  if (error) throw new Error(error.message);

  return userId;
}
