import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.tsx";
import MainLayout from "./layouts/MainLayout";
import NewProduct from "./pages/NewProduct/index.tsx";
import ProductManagement from "./pages/ProductManagement/index.tsx";
import Orders from "./pages/Orders/index.tsx";
import DetailOrder from "./pages/DetailOrder/index.tsx";
import Setting from "./pages/Setting/index.tsx";
import Register from "./pages/Register/index.tsx";
import Login from "./pages/Login/index.tsx";
import PinPoint from "./components/PanelLocation/components/PinPoint.tsx";
import { useSelector } from "react-redux";

const App = () => {
  const IsLogin = () => {
    const token = useSelector((state: {auth: {token: string | null}}) => state.auth.token);
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<IsLogin />} >
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/detail-order" element={<DetailOrder />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/add-new-product" element={<NewProduct />} />
          </Route>
        </Route>
        <Route path="/pinpoint" element={<PinPoint />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
