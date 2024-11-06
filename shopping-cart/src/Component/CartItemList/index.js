import React from 'react'
import CartItem from '../CartItem'
import { Card,Divider,Typography } from 'antd'
const { Title } = Typography;
function CartItemList() {
  return (
    <Card style={{height: '600px', overflowY: 'auto'}}>
        <Title level={3} style={{ textAlign: 'left', marginBottom:'0' }} >Cart</Title>
        <Divider style={{margin:'10,0'}} />
        <CartItem></CartItem>
    </Card>
  )
}

export default CartItemList