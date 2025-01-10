import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserTransaction } from "../../api/UserTransacionsApi";

export function UseAddTrnasaction() {
  const navigate = useNavigate();
  const { mutate, data, isLoading, error } = useMutation({
    mutationFn: ({ newTransaction }) =>
      createUserTransaction({ newTransaction }),
    onSuccess: (data) => {
      toast.success("transaction added succesfuly");
      navigate("/transactions");
    },
    onError: () => toast.error("teher is an error in creating transaction"),
  });
  return { mutate, data, isLoading, error };
}
