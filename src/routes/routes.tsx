import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";
import Compare from "../pages/compare";

import ProductDetail from "../pages/product-detail";
import Favorites from "../pages/favorites";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food/:code" element={<ProductDetail />} />
        <Route path="/compare/:selectedProducts" element={<Compare />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
