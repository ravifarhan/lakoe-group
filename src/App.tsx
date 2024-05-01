import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductManagement from "./pages/productManagement.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={"product-management"} element={<ProductManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
