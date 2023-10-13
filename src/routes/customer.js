import { Routes, Route } from "react-router-dom";

import Home from './../components/organisms/home';
import ProductDetail from "../components/organisms/productDetail";

function RoutesForCustomer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
}
export default RoutesForCustomer