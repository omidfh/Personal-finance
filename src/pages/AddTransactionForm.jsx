import { useFormContext } from "../FormaDataContext";
import TransactionForm from "./TransactionForm";

function AddTransactionForm() {
  const {
    handleFormSubmit,
    isEditing,
    tempData: transactions,
  } = useFormContext();

  return (
    <TransactionForm
      onSubmit={handleFormSubmit}
      initialData={{}}
      isEditing={isEditing}
    />
  );
}

export default AddTransactionForm;
