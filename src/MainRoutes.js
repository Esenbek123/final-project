import React from "react";
import { Route, Routes } from "react-router-dom";
import TrackMyOrder from "./components/MainPages/TrackMyOrder";
import UserAccount from "./components/MainPages/UserAccount";
import Cart from "./components/cart/Cart";
import Authorization from "./components/Auth/Authorization";
import Products from "./components/MainPages/Products";
import Pages from "./Pages/Pages";
import ProductDetails from "./components/MainPages/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/products" element={<Products />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/track" element={<TrackMyOrder />} />
      <Route path="/user" element={<UserAccount />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
