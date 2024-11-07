import React from "react";
import { Layout, Row, Col, Button, Badge } from "antd";
import ProductItem from "../Component/ProductItem";
import products from "../Data/data";
const { Header, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: "20px",
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
