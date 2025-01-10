import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const FormDataContext = createContext();

function DataProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  ////////////////////////////////////////////////////////////////////////////////////////
  let initialData = [
    {
      title: "groceries",
      amount: 200,
      priority: "Necessary",
      description: "weekly groceries shopping",
      id: 2,
      currency: "USD",
    },
    {
      title: "rent",
      amount: 6000,
      priority: "Necessary",
      description: "monthly rent payment",
      id: 4,
      currency: "USD",
    },
    {
      title: "electricity bill",
      amount: 100,
      priority: "Optional",
      description: "monthly electricity bill payment",
      id: 5,
      currency: "USD",
    },
    {
      title: "internet bill",
      amount: 50,
      priority: "Optional",
      description: "monthly internet bill payment",
      id: 6,
      currency: "USD",
    },
    {
      title: "car insurance",
      amount: 150,
      priority: "Necessary",
      description: "annual car insurance payment",
      id: 7,
      currency: "USD",
    },
    {
      title: "medical expenses",
      amount: 300,
      priority: "Necessary",
      description: "doctor's visit and medication",
      id: 8,
      currency: "USD",
    },
    {
      title: "school supplies",
      amount: 80,
      priority: "Necessary",
      description: "buying school supplies for kids",
      id: 9,
      currency: "USD",
    },
    {
      title: "entertainment",
      amount: 50,
      priority: "Optional",
      description: "movie tickets and dining out",
      id: 10,
      currency: "USD",
    },
    {
      title: "omid's birthday gift",
      amount: 200,
      priority: "Optional",
      description: "buying a gift for omid's birthday",
      id: 11,
      currency: "USD",
    },
  ];
  // let initialData = [];
  /////////////////////////////////////////////////////////////////////////////////////////////
  const [userId, setUserId] = useState("");

  function handleUserId(id) {
    setUserId(id);
  }

  /////////////////////////////////////////OLD WAY///////////////////////////////////////////////
  const [fund, setFund] = useState("");
  const [tempData, setTempData] = useState(initialData); // Assuming initialData is defined elsewhere or passed as props
  const [formData, setFormData] = useState({
    currency: "USD",
    title: "",
    amount: "",
    priority: "Necessary",
    description: "",
    id: null, // Initially, no ID
  });
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(formData) {
    console.log(formData);
    console.log(tempData);
    if (isEditing) {
      const updatedTempData = tempData.map((item) =>
        item.id === formData.id ? { ...item, ...formData } : item
      );
      setTempData(updatedTempData); // Update the state with the modified array
      setIsEditing(false); // Reset the editing flag
    } else {
      // Add logic
      const newData = { ...formData, id: new Date().getTime() }; // Simple ID generation
      setTempData([...tempData, newData]);
    }
    // Reset form data and editing flag
    setFormData({
      title: "",
      amount: "",
      priority: "Necessary",
      description: "",
      id: null,
    });
    setIsEditing(false);
  }

  function handleDelete(id) {
    setTempData(tempData.filter((data) => data.id !== id));
    toast.success("Expense Successfully Deleted !");
  }

  function handleEdit(id) {
    const toEdit = tempData.find((data) => data.id === id);
    if (toEdit) {
      setFormData(toEdit);
      setIsEditing(true);
    }
  }
  function handleSetFund(value) {
    setFund(value);
  }

  function handleSetCurrency(value) {
    setCurrency(value);
  }

  const allExpenses = tempData.reduce(
    (acc, data) => acc + Number(data.amount),
    0
  );
  const remainingMoney = Number(fund) - allExpenses;

  const necessaryExpenses = tempData
    .filter((data) => data.priority !== "Optional")
    .reduce((acc, cur) => acc + cur.amount, 0);
  const optionalExpenses = tempData
    .filter((data) => data.priority !== "Necessary")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const value = {
    userId,
    handleUserId,
    ////////////////////////////////////////////
    formData,
    setFormData,
    tempData,
    handleFormSubmit,
    handleDelete,
    handleEdit,
    isEditing,
    setIsEditing,
    fund,
    handleSetFund,
    currency,
    handleSetCurrency,
    allExpenses,
    remainingMoney,
    necessaryExpenses,
    optionalExpenses,
  };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
}

function useFormContext() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormContext must be used within a DataProvider");
  }
  return context;
}

export { DataProvider, useFormContext };
