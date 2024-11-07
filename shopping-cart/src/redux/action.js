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



