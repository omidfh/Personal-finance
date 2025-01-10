import { UseUserSettings } from "../hooks/settings/useUsersSettings";

import FundAmount from "../components/FundAmount";

import { Link } from "react-router-dom";
import Button from "../ui/Button";

import Loader from "../components/Loader";
import NoData from "./NoData";
import { GetTransactionList } from "../hooks/transactions/useTransactions";
import styled from "styled-components";
import { CgPlayListAdd } from "react-icons/cg";

const StyledDashboard = styled.div`
  height: 100%;
`;

const AddSection = styled.div`
  display: flex;
  justify-content: flex-end;
  & > a {
    color: #f1f1f1;
    border-bottom: 1px solid #fff;

    & > svg {
      font-size: 2rem;
      margin-bottom: -15px;
    }
  }
  transition: all 0.2s ease;
`;

function Dashboard() {
  const { data, isLoading, error } = UseUserSettings();
  const {
    data: transactions,
    isLoading: isLoading2,
    error: error2,
  } = GetTransactionList();
  console.log(transactions);

  if (isLoading || isLoading2) return <Loader />;
  if (error) return <NoData>No data For dashboard</NoData>;

  const allSpends = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  console.log(allSpends);
  return (
    <StyledDashboard>
      <AddSection>
        <Link to="/transactions-form">
          <Button type="submit">Add Transaction</Button>
          <CgPlayListAdd />
        </Link>
      </AddSection>
      <FundAmount setting={data} allSpends={allSpends} />
    </StyledDashboard>
  );
}

export default Dashboard;
