import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Typography,
  InputNumber,
  Checkbox,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function CartItem({
  product,
  selected,
  onSelectItem,
  onDeleteItem,
  onQuantityChange,
}) {
  const handleQuantityChange = (newQuantity) => {
    onQuantityChange(product.id, newQuantity);
  };

  return (
    <Card style={{ marginBottom: 4 }} bordered={false}>
      <Row gutter={12} align="middle">
        {/* Checkbox */}
        <Col xs={4} sm={2} md={2}>
          <Checkbox
            checked={selected}
            onChange={(e) => onSelectItem(e.target.checked)}
          />
        </Col>

        {/* Product Image */}
        <Col xs={8} sm={6} md={4} lg={4}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              marginTop: "30px",
            }}
          />
        </Col>

        {/* Product Info */}
        <Col xs={12} sm={12} md={10} lg={12} style={{ textAlign: "left" }}>
          <Title level={4}>{product.name}</Title>
          <Text>{product.price}</Text>

          <div style={{ marginTop: "10px", display: "flex" }}>
            <InputNumber
              min={1}
              value={product.quantity}
              style={{ width: 100 }}
              onChange={handleQuantityChange}
            />
          </div>
        </Col>

        {/* Price and Delete Button */}
        <Col
          xs={12} // Trên màn hình nhỏ, chiếm 1/2 chiều rộng
          sm={6}  // Trên màn hình vừa, chiếm 1/4 chiều rộng
          md={6}  // Trên màn hình trung bình, chiếm 1/4 chiều rộng
          lg={4}  // Trên màn hình lớn, chiếm 1/4 chiều rộng
          style={{ textAlign: "right" }}
        >
          <Text
            style={{
              fontSize: "20px",
              display: window.innerWidth <= 576 ? "none" : "inline",
            }}
            strong
          >
            {product.price}
          </Text>
          <br />
          <Button
            type="danger"
            onClick={() => onDeleteItem(product)}
            icon={<DeleteOutlined />}
            style={{ marginTop: "10px", padding: "0" }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
