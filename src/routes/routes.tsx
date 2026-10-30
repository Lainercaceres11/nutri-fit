import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ComparePage from "../pages/compare";
import Favorites from "../features/favorites/components/favorites";
import Product from "../pages/product-detail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food/:code" element={<Product />} />
        <Route path="/compare/:selectedProducts" element={<ComparePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
