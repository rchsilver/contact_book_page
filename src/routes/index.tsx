import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Registe } from "../pages/Register/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registe />} />
    </Routes>
  );
};
