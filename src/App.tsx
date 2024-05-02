import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.tsx";
import MainLayout from "./layouts/MainLayout";
import NewProduct from "./pages/formNewProduct";
import ProductManagement from "./pages/ProductManagement/index.tsx";
import Orders from "./pages/Orders/index.tsx";
import DetailOrder from "./components/DetailOrder/index.tsx";
import Setting from "./pages/Setting/index.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/detail-order" element={<DetailOrder />} />
          <Route path="/add-new-product" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
