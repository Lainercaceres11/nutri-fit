import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Food from "../pages/food";
import Header from "../components/header";
import Footer from "../components/footer";
import Compare from "../pages/compare";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food/:code" element={<Food />} />
        <Route path="/compare/:selectedProducts" element={<Compare />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
