import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/productManagement.tsx";
import Setting from "./pages/Setting/index.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
