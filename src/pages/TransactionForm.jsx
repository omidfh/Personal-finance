import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import { useFormContext } from "../FormaDataContext";
import { UseUserSettings } from "../hooks/settings/useUsersSettings";
import { UseAddTrnasaction } from "../hooks/transactions/addTransaction";
import { UseEditTransaction } from "../hooks/transactions/useEditTransaction";

import Button from "../ui/Button";
import { Form } from "../ui/Form";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TextArea } from "../ui/TextArea";
import { formatCurrency } from "../utils/formatCurrency";

const USER_ID = "0ecfffbe-c8dc-4948-bf9f-771bfa933936";

function TransactionForm({
  initialData = null,
  isEditing = false,
  setIsEditing,
}) {
  const { currency } = useFormContext();

  const { mutate: addTansaction, isLoading, error } = UseAddTrnasaction();
  const {
    mutate: editTransaction,
    isLoading: isLoading2,
    error: error2,
  } = UseEditTransaction();

  const { data, isLoading: isLoading3, error: error3 } = UseUserSettings();

  const [formInputsData, setFormInputsData] = useState({
    title: "",
    amount: null,
    priority: "Necessary",
    description: "",
    user_id: USER_ID,
  });

  useEffect(
    function () {
      if (isEditing) {
        setFormInputsData(initialData);
      }
    },
    [isEditing]
  );

  function handleChangeFormData(e) {
    const { name, value } = e.target;
    setFormInputsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitForm(e) {
    e.preventDefault();
    if (isEditing) {
      if (formInputsData === initialData) {
        return;
      }
      editTransaction({
        transactionId: formInputsData.id,
        updatedData: formInputsData,
      });
      setIsEditing(false);
    } else if (!isEditing) {
      console.log("new transaction", formInputsData);
      addTansaction({ newTransaction: formInputsData });
    }
  }

  function clearItems() {
    setFormInputsData({
      title: "",
      amount: null,
      priority: "Necessary",
      description: "",
      user_id: USER_ID,
    });
  }

  if (isLoading || isLoading2 || isLoading3) return <Loader />;

  return (
    <Form onSubmit={submitForm}>
      <label htmlFor="title" style={{ marginTop: "25px" }}>
        What are you spending money on?
      </label>
      <Input
        type="text"
        name="title"
        value={formInputsData.title}
        required={true}
        onChange={handleChangeFormData}
        placeholder="Spending Subject"
      />

      <label htmlFor="amount">How much did you spend?</label>
      <Input
        type="number"
        name="amount"
        required={true}
        value={formInputsData.amount}
        onChange={handleChangeFormData}
        placeholder="Amount"
      />

      {formInputsData.amount && (
        <label htmlFor="currency">
          {formatCurrency(formInputsData.amount, data.currency)} ({currency})
        </label>
      )}

      <label htmlFor="priority">Priority</label>
      <Select
        type="priority"
        name="priority"
        value={formInputsData.priority}
        onChange={handleChangeFormData}
      >
        <option value="Necessary">Necessary</option>
        <option value="Optional">Optional</option>
      </Select>

      <label htmlFor="description">Description (optional):</label>
      <TextArea
        name="description"
        value={formInputsData.description}
        onChange={handleChangeFormData}
        placeholder="Description"
      />
      <div style={{ display: "flex" }}>
        <Button type="submit">
          {isEditing ? "Update Transaction" : "Add Transaction"}
        </Button>
        <Button
          type="reset"
          onClick={!isEditing ? clearItems : () => setIsEditing(false)}
        >
          {isEditing ? "Cancel" : "Clear Form"}
        </Button>
      </div>
    </Form>
  );
}

export default TransactionForm;
