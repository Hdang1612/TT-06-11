import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCartAction,removeFavoriteAction } from "../../redux/action";
import "react-toastify/dist/ReactToastify.css";
const { Title, Text } = Typography;


function FavoriteItem({ product, onDeleteItem }) {
    const dispatch=useDispatch()
  const handleAddCart = () => {
    dispatch(addCartAction(product));
    toast.success("Thêm thành công !", {
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

  const handleDelete = () => {
    dispatch(removeFavoriteAction(product.id))
  }


  return (
    <Card style={{ marginBottom: 4 }} bordered={false}>
      <Row gutter={12} align="middle">
        <Col span={4}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              marginTop: "8px",
            }}
          />
        </Col>

        <Col span={14} style={{ textAlign: "left" }}>
          <Title level={4}>{product.name}</Title>
          <Text>{product.price}</Text>
        </Col>

        <Col span={6} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            style={{ marginTop: "10px", marginRight: "8px" }}
            onClick={handleAddCart}
          >
            Thêm vào giỏ
          </Button>

          <Button
            type="danger"
            icon={<DeleteOutlined />}
            style={{ marginTop: "10px", padding: "0" }}
            onClick={handleDelete}
          >
            Xóa
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default FavoriteItem;
