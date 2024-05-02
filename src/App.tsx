import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.tsx";
import MainLayout from "./layouts/MainLayout";
import NewProduct from "./pages/formNewProduct";
import ProductManagement from "./pages/productManagement.tsx";
import Orders from "./pages/Orders/index.tsx";
import DetailOrder from "./components/DetailOrder/index.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/index" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/detail-order" element={<DetailOrder />} />
          <Route path="/add-new-product" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
