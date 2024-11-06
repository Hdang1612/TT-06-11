import React from 'react'
import { Input, Button, Typography, Row, Col, Card, Divider } from 'antd';
import { useState } from 'react';
const { Text, Title } = Typography;
const CartSummary = () => {
    const [discountCode, setDiscountCode] = useState('');
    const [subtotal, setSubtotal] = useState(100); // Giả sử giá subtotal là 100
    const [discount, setDiscount] = useState(10); // Giả sử mã giảm giá là 10
    const [delivery, setDelivery] = useState(5); // Giả sử phí vận chuyển là 5
    const [tax, setTax] = useState(3); // Giả sử thuế là 3
    const [total, setTotal] = useState(subtotal - discount + delivery + tax); // Tổng tiền
  
    const handleApplyDiscount = () => {
      // Logic xử lý mã giảm giá (có thể tính toán lại tổng giá trị)
      // Ví dụ đơn giản là giảm 10% nếu mã đúng
      if (discountCode === 'DISCOUNT10') {
        setDiscount(10); // Giảm giá 10
      } else {
        setDiscount(0); // Không giảm giá
      }
      setTotal(subtotal - discount + delivery + tax); // Cập nhật lại tổng
    };
  return (
    <Card>
        <Row style={{ textAlign: 'left' }}>
          <Col span={12}><Text >Shipping Cost</Text></Col>
          <Col span={12}>${delivery}</Col>
        </Row>

        <Divider />

        <Row style={{ textAlign: 'left' }} justify="space-between">
          <Col span={12}><Text>Discount Code</Text></Col>
          <Col style={{display:'flex'}} span={12}>
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

        <Row style={{ textAlign: 'left' }}  justify="space-between">
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
  )
}

export default CartSummary