import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Registe } from "../pages/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registe />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
