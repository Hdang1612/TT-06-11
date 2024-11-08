import { saveToStorage } from "../Data/localStorage";
import { getFromStorage } from "../Data/localStorage";


export const addCartAction = (product) => {
  return (dispatch, getState) => {
    const state = getState();
    const index = state.listCart.findIndex((item) => item.id === product.id);

    let updatedCart;
    if (index >= 0) {
      updatedCart = state.listCart.map((item, idx) =>
        idx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...state.listCart, { ...product, quantity: 1 }];
    }

    saveToStorage("listCart", updatedCart);

    // Dispatch action cập nhật state
    dispatch({
      type: "ADDCART",
      payload: updatedCart,
    });
  };
};

export const updateCartAction = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};

export const removeCartAction = (productId) => {
  return (dispatch, getState) => {
    const updatedCart = getState().listCart.filter(
      (item) => item.id !== productId
    );
    saveToStorage("listCart", updatedCart);

    dispatch({
      type: "REMOVECART",
      payload: updatedCart,
    });
  };
};

export const updateQuantity = (id, quantity) => {
  return (dispatch, getState) => {
    const updatedCart = getState().listCart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    saveToStorage("listCart", updatedCart);

    dispatch({
      type: "UPDATEQUANTITY",
      payload: updatedCart,
    });
  };
};

export const addPayAction = (product) => {
  return (dispatch, getState) => {
    let updatedPayList;
    const state = getState();

    if (state.listPay.some((item) => item.id === product.id)) {
      updatedPayList = state.listPay.map((item) =>
        item.id === product.id ? { ...item, quantity: product.quantity } : item
      );
    } else {
      updatedPayList = [...state.listPay, product];
    }

    saveToStorage("listPay", updatedPayList);

    dispatch({
      type: "ADDPAY",
      payload: updatedPayList,
    });
  };
};

export const removePayAction = (productId) => {
  return (dispatch, getState) => {
    const updatedListPay = getState().listPay.filter(
      (item) => item.id !== productId
    );
    saveToStorage("listPay", updatedListPay);

    dispatch({
      type: "REMOVEPAY",
      payload: updatedListPay,
    });
  };
};

export const clearPayAction = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEARPAY",
    });
  };
};

export const addFavoriteAction = (product) => {
  return (dispatch, getState) => {
    const updatedFavoriteList = [...getState().listFavorite, product];
    saveToStorage("listFavorite", updatedFavoriteList);

    dispatch({
      type: "ADDFAVORITE",
      payload: updatedFavoriteList,
    });
  };
};



export const removeFavoriteAction = (productId) => {
  return (dispatch, getState) => {
    const updatedFavoriteList = getState().listFavorite.filter(
      (product) => product.id !== productId
    );
    saveToStorage("listFavorite", updatedFavoriteList);

    dispatch({
      type: "REMOVEFAVORITE",
      payload: updatedFavoriteList,
    });
  };
};


