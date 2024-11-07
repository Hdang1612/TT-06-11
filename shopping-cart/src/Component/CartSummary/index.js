import React, { useEffect } from 'react'
import { Input, Button, Typography, Row, Col, Card, Divider } from 'antd';
import { useState  } from 'react';
import { useSelector } from 'react-redux';
import { cartSelectors,payListSelectors } from '../../redux/selectors';
const { Text, Title } = Typography;
const CartSummary = () => {
  const payList = useSelector(payListSelectors);
  const [discountCode, setDiscountCode] = useState('DISCOUNT10');
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(5); 
  const [tax, setTax] = useState(0);
  const [subtotal, setSubtotal] = useState(0); 
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    if (payList.length === 0) {
      setDelivery(0);
      setDiscount(0);
      setSubtotal(0);
      setTax(0);
    } else {
      const subtotalValue = payList.reduce((acc, product) => {
        const price = parseFloat(product.price.replace('$', '').replace(',', '')); 
        return acc + price * product.quantity;
      }, 0);

      setSubtotal(subtotalValue);
      setTax(subtotalValue * 0.1);
    }
  }, [payList]);


  useEffect(() => {
    setTotal(subtotal - discount + delivery + tax);
  }, [subtotal, discount, delivery, tax]);

  const handleApplyDiscount = () => {
    if (discountCode === 'DISCOUNT10') {
      setDiscount(10); 
    } else {
      setDiscount(0); 
    }
  };

  return (
    <Card>
      <Row style={{ textAlign: 'left' }}>
        <Col span={12}><Text>Shipping Cost</Text></Col>
        <Col span={12}>${delivery}</Col>
      </Row>

      <Divider />

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Text>Discount Code</Text></Col>
        <Col style={{ display: 'flex' }} span={12}>
          <Input
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            style={{ width: '80%' }}
          />
          <Button onClick={handleApplyDiscount} type="primary" style={{ marginLeft: 8 }}>
            Apply
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Text>Subtotal</Text></Col>
        <Col span={12}><Text>${subtotal}</Text></Col>
      </Row>

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Text>Discount</Text></Col>
        <Col span={12}><Text>- ${discount}</Text></Col>
      </Row>

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Text>Delivery</Text></Col>
        <Col span={12}><Text>${delivery}</Text></Col>
      </Row>

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Text>Tax</Text></Col>
        <Col span={12}><Text>${tax}</Text></Col>
      </Row>

      <Divider />

      <Row style={{ textAlign: 'left' }} justify="space-between">
        <Col span={12}><Title level={4}>Total</Title></Col>
        <Col span={12}><Title level={4}>${total}</Title></Col>
      </Row>

      <Button type="primary" style={{ width: '100%' }}>Checkout</Button>
    </Card>
  );
}

export default CartSummary