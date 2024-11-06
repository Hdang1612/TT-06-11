import React from "react";
import { Layout, Row, Col, Button } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import ProductItem from "../Component/ProductItem";
import products from "../Data/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Header, Content } = Layout;

const Home = () => {
    

  return (
    <Layout >
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Product List</h1>
        <div>
          <Link to="/cart" style={{ color: "white", marginRight: "16px" }}>
            <ShoppingCartOutlined style={{fontSize:'20px', marginRight:'12px'}} /> 
          </Link>
          <Link to="/favorite" style={{ color: "white" }}>
            <HeartOutlined  style={{fontSize:'20px'}}/> 
          </Link>
        </div>
      </Header>
      <Content style={{ padding: "20px" ,width:'1200px', margin:'0 auto' , height:'100vh'}}>
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
