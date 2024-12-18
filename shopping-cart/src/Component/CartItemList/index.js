import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import { Card, Divider, Typography, Checkbox, Button, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { saveToStorage, getFromStorage } from "../../Data/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { cartSelectors } from "../../redux/selectors";
import { payListSelectors } from "../../redux/selectors";
import {
  addPayAction,
  removePayAction,
  clearPayAction,
  updateCartAction,
  removeCartAction,
  updateQuantity,
} from "../../redux/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Title } = Typography;

function CartItemList() {
  const products = useSelector(cartSelectors);
  const selectedItems = useSelector(payListSelectors);
  const dispatch = useDispatch();

  const handleSelectAll = (checked) => {
    if (checked) {
      products.forEach((product) => {
        dispatch(addPayAction(product));
      });
    } else {
      dispatch(clearPayAction());
    }
  };

  const handleDeleteSelected = () => {
    const updatedProducts = products.filter(
      (item) => !selectedItems.some((selectedItem) => selectedItem.id === item.id)
    );
    saveToStorage("listCart", updatedProducts);
    dispatch(updateCartAction(updatedProducts));
    dispatch(clearPayAction());
  };

  const handleDeleteItem = (product, checked) => {
    dispatch(removeCartAction(product.id));
    toast.success("Xóa thành công !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (checked) {
      dispatch(removePayAction(product.id));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity(id, newQuantity));

    const isSelected = selectedItems.some((item) => item.id === id);

    if (isSelected) {
      dispatch(addPayAction({ id, quantity: newQuantity }));
    }
  };

  const handleSelectItem = (product, checked) => {
    console.log(checked);
    if (checked) {
      dispatch(addPayAction(product));
      // dispatch(removePayAction(product.id))
    } else {
      dispatch(removePayAction(product.id));
    }
  };

  return (
    <Card style={{ height: "600px", overflowY: "auto" }}>
      <Title level={3} style={{ textAlign: "left", marginBottom: "0" }}>
        Cart
      </Title>
      <Divider style={{ margin: "10,0" }} />

      <Checkbox
        checked={
          selectedItems.length === products.length && products.length > 0
        }
        onChange={(e) => handleSelectAll(e.target.checked)}
      >
        Chọn tất cả
      </Checkbox>

      <Button
        type="danger"
        icon={<DeleteOutlined />}
        onClick={handleDeleteSelected}
        disabled={selectedItems.length === 0}
        style={{ marginLeft: 8, marginBottom: 16 }}
      >
        Xóa
      </Button>

      {products.length === 0 ? (
        <Empty description="Giỏ hàng của bạn hiện tại đang trống" />
      ) : (
        products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            selected={selectedItems.some((item) => item.id === product.id)}
            onSelectItem={(checked) => handleSelectItem(product, checked)}
            onDeleteItem={(checked) => handleDeleteItem(product, checked)}
            onQuantityChange={handleQuantityChange}
          />
        ))
      )}
    </Card>
  );
}

export default CartItemList;

// {
//   console.log(checked)
//   if (checked) {
//     dispatch(addPayAction(product));
//   } else {
//     dispatch(removePayAction(product));
//   }
// }
