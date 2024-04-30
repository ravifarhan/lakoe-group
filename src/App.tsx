import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductManagement from "./pages/productManagement.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/productManagement"} element={<ProductManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
