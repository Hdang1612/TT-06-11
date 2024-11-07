import React from "react";
import CartItemList from "../Component/CartItemList";
import CartSummary from "../Component/CartSummary";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <div
        className="test"
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
        }}
      >
        <Row
          gutter={16}
          justify="center"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <Col xs={24} sm={24} lg={16}>
            <CartItemList />
          </Col>

          <Col
            xs={24}
            sm={24}
            lg={8}
            style={{ marginTop: "20px", paddingLeft: "20px" }}
          >
            <CartSummary />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cart;
