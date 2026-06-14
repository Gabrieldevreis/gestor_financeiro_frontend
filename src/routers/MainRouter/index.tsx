import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../../pages/login";
import { Dashboard } from "../../pages/dashboard";
import { Goals } from "../../pages/goals";
import { Investments } from "../../pages/investments";
import { Transactions } from "../../pages/transactions";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/goals" element={<Goals />} />
         <Route path="/investments" element={<Investments />} />
         <Route path="/transactions" element={<Transactions />} />
      </Routes>
  </BrowserRouter>
  );
}