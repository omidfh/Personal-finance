import { supabase } from "./supabase";

export async function getUserTransactions(userId) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Transactions canot be Loaded");

  return data;
}

export async function deleteUserTransaction(transactionID) {
  const { data, error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", transactionID);

  if (error) throw new Error("transaction cannot be deleted");
  return data;
}

export async function createUserTransaction({ newTransaction }) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([newTransaction])
    .select();

  if (error) throw new Error("transaction cannot be created");
  return data;
}

export async function editUserTransaction({ transactionId, updatedData }) {
  console.log(transactionId);
  console.log(updatedData);
  const { data, error } = await supabase
    .from("transactions")
    .update(updatedData)
    .eq("id", transactionId)
    .select();

  if (error) throw new Error("transaction cannot be created");
  return data;
}
