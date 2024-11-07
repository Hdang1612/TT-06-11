import React from "react";
import { Layout, Row, Col, Button ,Badge  } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import ProductItem from "../Component/ProductItem";
import products from "../Data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelectors } from "../redux/selectors";
const { Header, Content } = Layout;

const Home = () => {
  const cartItems = useSelector(cartSelectors);
  const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h1 style={{ color: "white" }}>Product List</h1>
        </Link>
        <div>
          <Link to="/cart" style={{ color: "white", marginRight: "16px" }}>
          <Badge style={{fontSize:'12px'}} count={totalQuantity} offset={[-5, 0]}>
              <ShoppingCartOutlined
                style={{ fontSize: "20px", marginRight: "12px", color :"white" }}
              />
            </Badge>
          </Link>
          <Link to="/favorite" style={{ color: "white" }}>
            <HeartOutlined style={{ fontSize: "20px" }} />
          </Link>
        </div>
      </Header>
      <Content
        style={{
          padding: "20px",
          width: "1200px",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} sm={12} lg={6}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
