import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteUserTransaction } from "../../api/UserTransacionsApi";

export function UseDeleteTransaction() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (transactionID) => deleteUserTransaction(transactionID),
    onSuccess: () => {
      toast.success("Transaction Deleted Successfully");
      queryClient.invalidateQueries(["transactions"]);
    },
    onError: () => {
      toast.error("Fail to Delete the transaction");
    },
  });
  return { mutate, isDeleting };
}
