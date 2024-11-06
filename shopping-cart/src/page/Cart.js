import React from "react";
import CartItemList from '../Component/CartItemList';
import CartSummary from "../Component/CartSummary";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <div style={{height:'100%', display:'flex', alignItems:'center'}}>

    <div className="test"
      style={{
        width: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
      }}
    >
      <Row
        gutter={8}
        justify="center"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <Col span={16}>
          <CartItemList></CartItemList>
        </Col>
        <Col span={8}>
          <CartSummary></CartSummary>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Cart;
