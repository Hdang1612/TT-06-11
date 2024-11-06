import logo from "./logo.svg";
import "./App.css";
import CartItemList from "./Component/CartItemList";
import CartSummary from "./Component/CartSummary";
import { Row, Col,Typography } from "antd";
const { Title } = Typography;
function App() {
  return (
    <div
      className="App"
      style={{
        width:'1000px',
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        // height: '90vh',
      }}
    >
      {/* <Title
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        SHOPPING CART
      </Title> */}
      <Row gutter={8} justify="center"  style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Col span={16}>
          <CartItemList></CartItemList>
        </Col>
        <Col span={8}>
          <CartSummary></CartSummary>
        </Col>
      </Row>
    </div>
  );
}

export default App;
