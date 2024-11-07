import React from "react";
import { Outlet } from "react-router-dom"; 
import HeaderComponent from "./Header";

const LayoutComponent = ({ totalQuantity }) => {
  return (
    <div>
      <HeaderComponent totalQuantity={totalQuantity} />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutComponent;
