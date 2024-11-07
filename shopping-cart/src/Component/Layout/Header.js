import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";

const HeaderComponent = ({ totalQuantity }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#001529",
        padding: "0 20px",
      }}
    >
      <Link to="/">
        <h1 style={{ color: "white" }}>Product List</h1>
      </Link>
      <div>
        <Link to="/cart" style={{ color: "white", marginRight: "16px" }}>
          <Badge
            style={{ fontSize: "12px" }}
            count={totalQuantity}
            offset={[-5, 0]}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "20px", marginRight: "12px", color: "white" }}
            />
          </Badge>
        </Link>
        <Link to="/favorite" style={{ color: "white" }}>
          <HeartOutlined style={{ fontSize: "20px" }} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
