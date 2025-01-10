import React from "react";
// import { useFormContext } from "../FormaDataContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { styled } from "styled-components";

const ChartBox = styled.div`
  /* Box */
  background-color: #f9f9f9;
  border: #d4d4d4;
  border-radius: 25px;

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const fund = 10000;
const allExpenses = 6000;
const remainingMoney = 4000;
const necessaryExpenses = 4000;
const optionalExpenses = 2000;
function Chart() {
  // const totalExpenses = Array.isArray(allExpenses)
  //   ? allExpenses.reduce((acc, curr) => acc + curr.amount, 0)
  //   : allExpenses;

  // Adjusting data structure for Recharts
  const chartData = [
    { name: "Initial Fund", value: fund },
    { name: "Neccessary Expenses", value: necessaryExpenses },
    { name: "Optional Expenses", value: optionalExpenses },
    { name: "Remaining Money", value: remainingMoney },
  ];

  // Colors for each slice
  const COLORS = ["#63beff", "#ffc956", "#eb3636", "#5cff56"];

  return (
    <ChartBox>
      <h2 style={{ textAlign: "center" }}>Finance Report</h2>

      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={85}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartBox>
  );
}

export default Chart;
