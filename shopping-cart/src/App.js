import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./page/Favorite";
import Cart from "./page/Cart";
import Home from "./page/Home";
import LayoutComponent from "./Component/Layout/Layout";
import { useSelector } from "react-redux";
import { cartSelectors } from "./redux/selectors";
function App() {
  const cartItems = useSelector(cartSelectors);
  const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0); 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent totalQuantity={totalQuantity} />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
