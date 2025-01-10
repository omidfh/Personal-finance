import React from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../FormaDataContext";
import { HiPencil, HiTrash } from "react-icons/hi";

import Loader from "../components/Loader";

import MiniForm from "../ui/MiniForm";
import Button from "../ui/Button";

import {
  TransactionContainer,
  TransactionHeader,
  TransactionItem,
  ActionButton,
  ActionsContainer,
} from "../ui/TableStyles";
import { useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import NoData from "./NoData";

import { GetTransactionList } from "../hooks/transactions/useTransactions";
import { UseDeleteTransaction } from "../hooks/transactions/deleteTransaction";
import { UseUserSettings } from "../hooks/settings/useUsersSettings";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100%;
`;

function TransactionList() {
  const [isEditing, setIsEditing] = useState(false);
  const { data: transactions, isLoading, error } = GetTransactionList();
  const { mutate: deleteTransaction, isDeleting } = UseDeleteTransaction();
  const {
    data: settings,
    isLoading: isLoading2,
    error: error2,
  } = UseUserSettings();

  function handleDeleteTransaction(transactionID) {
    deleteTransaction(transactionID);
  }

  ///////////////////OLD WAY////////////////////////
  const [currentTransaction, setCurrentTransaction] = useState();

  function handleButtonEdit(e, id) {
    e.preventDefault();
    setIsEditing(true);

    setCurrentTransaction(
      transactions.find((transaction) => transaction.id === id)
    );
  }
  ////////////////////////////////////////////

  if (isLoading || isDeleting || isLoading2) return <Loader />;

  if (error || error2)
    return (
      <NoData path="/" pageName="Dashboard">
        No data For Transaction List , set Your Fund and Currency From Dashboard
      </NoData>
    );

  return (
    <MainContainer>
      <Link
        to="/transactions-form"
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "10px",
          textDecoration: "none",
        }}
      >
        <Button type="submit">Add Transaction</Button>
      </Link>

      <TransactionContainer>
        <TransactionHeader>
          <p>#</p>
          <p>Title</p>
          <p>Amount</p>
          <p>Priority</p>
          <p>Description</p>
          <p>Actions</p>
        </TransactionHeader>

        {transactions?.map((transaction, index) => (
          <TransactionItem key={index}>
            <p>{index + 1}</p>
            <p>{transaction.title}</p>
            <p>{formatCurrency(transaction.amount, settings.currency)}</p>
            <p>{transaction.priority}</p>
            <p>{transaction.description}</p>
            <ActionsContainer>
              <ActionButton
                onClick={() => handleDeleteTransaction(transaction.id)}
                disabled={isDeleting}
              >
                <HiTrash /> delete
              </ActionButton>
              <ActionButton
                onClick={(e) => {
                  handleButtonEdit(e, transaction.id);
                }}
              >
                <HiPencil /> edit
              </ActionButton>
            </ActionsContainer>
          </TransactionItem>
        ))}
        {isEditing && (
          <MiniForm
            formData={currentTransaction}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
          />
        )}
      </TransactionContainer>
    </MainContainer>
  );
}

export default TransactionList;
