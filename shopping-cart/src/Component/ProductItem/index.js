import React from "react";
import { Card, Button, Col, Typography, Row, Checkbox } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCartAction } from "../../redux/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ToastNotification from "../Toast";
// import { cartSelectors } from "../redux/selectors";
const { Title, Text } = Typography;

const ProductItem = ({ product }) => {
  // const toastNotificationRef = React.createRef();
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCartAction(product));
    toast.success('Thêm thành công !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <Card hoverable style={{ width: 280, marginBottom: 16 }}>
      <img
        alt={product.name}
        src={product.image}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <div style={{ padding: "16px" }}>
        <Title level={4} style={{ marginBottom: "8px" }}>
          {product.name}
        </Title>
        <Text strong style={{ marginBottom: "16px", display: "block" }}>
          {product.price}
        </Text>

        <Row gutter={8}>
          <Col span={12}>
            <Button
              onClick={handleAddCart}
              type="primary"
              icon={<ShoppingCartOutlined />}
              block
            ></Button>
          </Col>
          <Col span={12}>
            <Button type="default" icon={<HeartOutlined />} block></Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ProductItem;
