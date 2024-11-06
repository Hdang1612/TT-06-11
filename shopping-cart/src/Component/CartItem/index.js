import React from "react";
import { Card, Row, Col, Button, Typography, InputNumber, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import products from "../../Data/data"; // Import mảng products
const { Title, Text } = Typography;
const { Option } = Select;

function CartItem({ type = "cart" }) {
  const [products, setProducts] = useState([]);
  // Dùng useEffect để lấy dữ liệu từ localStorage khi component được render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(storedCart);
  }, []);

  return (
    <div>
      {products.map((cartList) => (
        <Card key={cartList.id} style={{ marginBottom: 4 }} bordered={false}>
          <Row gutter={12} align="middle">
            <Col span={4}>
              <img
                src={cartList.image}
                alt={cartList.name}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  marginTop: "30px",
                }}
              />
            </Col>

            <Col span={16} style={{ textAlign: "left" }}>
              <Title level={4}>{cartList.name}</Title>
              <Text>{cartList.price}</Text>

              <div style={{ marginTop: "10px", display: "flex" }}>
                <InputNumber
                  min={1}
                  value={cartList.quantity}
                  // onChange={(value) => onQuantityChange(product.id, value)}
                  style={{ width: 100 }}
                />
              </div>
            </Col>

            <Col span={4} style={{ textAlign: "right" }}>
              <Text style={{ fontSize: "20px" }} strong>
                {cartList.price}
              </Text>
              <br />
              <Button
                type="danger"
                icon={<DeleteOutlined />}
                style={{ marginTop: "10px", padding: "0" }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}

export default CartItem;
