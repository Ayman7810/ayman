/** @format */

import React from "react";
import HomePage from "./pages/Home/HomePage.js";
import { BrowserRouter, Route, Routes ,HashRouter} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage.js";
import RegesterPage from "./pages/auth/Regester/Regester.js";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage/ForgotPasswordPage.js";
import Footer from "./components/Uitilty/Footer/Footer.js";
import ProducteDetilsPage from "./pages/Producte/productDetilesPage/productDetilesPage.js";
import ProductesFilterPage from "./pages/Producte/productesFilterPage/productesFilterPage.js";
import CartPage from "./pages/Cart/CartPage.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
const App = () => {
  return (
    <div className="text-center">
      <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Regester" element={<RegesterPage />} />
          <Route path="/Reset-password" element={<ForgotPasswordPage />} />
          <Route path="/product-detilis/:id" element={<ProducteDetilsPage />} />
          <Route path="/products" element={<ProductesFilterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
