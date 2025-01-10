import ChartComponent from "../components/ChartComponent";
import { useFormContext } from "../FormaDataContext";
import NoData from "./NoData";

function Reports() {
  // const { fund, tempData } = useFormContext();
  // if (tempData.length < 1) {
  //   return (
  //     <NoData path="/transaction-form" pageName="transaction form">
  //       No data For Reports , set Your Fund and Currency From Dashboard
  //     </NoData>
  //   );
  // }
  // if (!fund) {
  //   return (
  //     <NoData path="/" pageName="Dashboard">
  //       No data For Transaction List , set Your Fund and Currency From Dashboard
  //     </NoData>
  //   );
  // } else {
  return (
    <>
      <ChartComponent />
    </>
  );
}

export default Reports;
