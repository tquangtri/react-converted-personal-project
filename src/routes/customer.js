import { Routes, Route } from "react-router-dom";

import Home from './../components/organisms/home';

function RoutesForCustomer() {
  return (
    <Routes  >
      <Route path="/" element={<Home />} />

    </Routes>
  );
}
export default RoutesForCustomer