import { useQueryClient, useQuery } from "@tanstack/react-query";
// import { useQuery } from "react-query";
import { getUserTransactions } from "../../api/UserTransacionsApi";

const USER_ID = "0ecfffbe-c8dc-4948-bf9f-771bfa933936";

export function GetTransactionList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getUserTransactions(USER_ID),
  });
  return { data, isLoading, error };
}
