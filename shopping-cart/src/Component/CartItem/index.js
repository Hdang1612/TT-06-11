import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputNumber,
  Select,
  Typography,
  Divider,
} from "antd";
import {DeleteOutlined} from '@ant-design/icons'
const { Title, Text } = Typography;
const { Option } = Select;
// options={[
//     { value: 'jack', label: 'Jack' },
//     { value: 'lucy', label: 'Lucy' },
//     { value: 'Yiminghe', label: 'yiminghe' },
//     { value: 'disabled', label: 'Disabled', disabled: true },
//   ]}
const product = {
  id: 1,
  name: "Áo thun nam",
  image: "https://via.placeholder.com/150",
  price: 19.99,
  quantity: 2,
  size: "M",
  color: "Đen",
  availableSizes: ["S", "M", "L", "XL"],
  availableColors: ["Đen", "Trắng", "Xanh"],
};
function CartItem(onQuantityChange, onRemove) {
  return (
    <Card style={{ marginBottom: 4 }} bordered={false}>
      <Row gutter={12} align="middle">
        <Col span={4}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={16} style={{ textAlign: "left" }}>
          <Title level={4}>Ten sp</Title>
          <Text strong>describe</Text>

          <div style={{ marginTop: "10px", display: "flex" }}>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
             <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[{ value: "lucy", label: "Lucy" }]}
            />
              <InputNumber
                min={1}
                value={1}
                // onChange={(value) => onQuantityChange(product.id, value)}
                style={{ width: 100, marginLeft: 8 }}
              />
          </div>
        </Col>

        <Col span={4} style={{ textAlign: "right" }}>
          <Text strong>Price</Text>
          <br />
          <Button
            type="danger"
            // icon="delete"
            icon={<DeleteOutlined />}
            onClick={() => onRemove(1)}
            style={{ marginTop: "10px", padding: '0' }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
