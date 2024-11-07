export const addCartAction = (data) => {
  return {
    type: "ADDCART",
    payload: data,
  };
};

export const updateCartAction = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};

export const removeCartAction = (data) => {
    return {
      type: "REMOVECART",
      payload: data,
    };
  };

export const updateQuantity = (id,quantity) => {
    return {
      type: "UPDATEQUANTITY",
      payload: {id,quantity},
    };
  };

export const addPayAction = (data) => {
  return {
    type: "ADDPAY",
    payload: data,
  };
};


export const removePayAction = (data) => {
  return {
    type: "REMOVEPAY",
    payload: data,
  };
};


export const clearPayAction = () => {
  return {
    type: "CLEARPAY",
  };
};


export const addFavoriteAction =(data) => {
  return {
    type :'ADDFAVORITE',
    payload:data
  }
}

export const removeFavoriteAction =(data) => {
  return {
    type: "REMOVEFAVORITE",
    payload: data,
  };
}


