import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DataProvider } from "./FormaDataContext";
import { Toaster } from "react-hot-toast";

import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import TransactionList from "./pages/TransactionList";
import AddTransactionForm from "./pages/AddTransactionForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Test from "./pages/Test";
import NewForm from "./components/NewForm";
import NewFund from "./components/NewFund";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/transactions" element={<TransactionList />} />
              <Route
                path="/transactions-form"
                element={<AddTransactionForm />}
              />
              <Route path="/newform" element={<NewForm />} />
              <Route path="/test" element={<Test />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/newfund" element={<NewFund />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          tosatOptios={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#d4d4d4",
              textColor: "#1e1e1e",
            },
          }}
        />
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
