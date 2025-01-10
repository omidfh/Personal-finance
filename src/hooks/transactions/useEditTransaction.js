import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { editUserTransaction } from "../../api/UserTransacionsApi";

export function UseEditTransaction() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: ({ transactionId, updatedData }) =>
      editUserTransaction({ transactionId, updatedData }),

    onSuccess: () => {
      toast.success("transaction Edited successfully");
      navigate("/transactions");
      queryClient.invalidateQueries(["transacions"]);
    },

    onError: () => toast.error("there is an error in editing transaction"),
  });
  return { mutate, isLoading, error };
}
