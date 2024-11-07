import { saveToStorage } from "../Data/localStorage";
import { getFromStorage } from "../Data/localStorage";
const initState = {
  listCart: getFromStorage("listCart") || [],
  listPay: [],
  listFavorite: getFromStorage("listFavorite") || [],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action); //check
  console.log(state.listFavorite);
  switch (action.type) {
    case "ADDCART":
      const index = state.listCart.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedCart;
      if (index >= 0) {
        updatedCart = state.listCart.map((item, idx) =>
          idx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.listCart, { ...action.payload, quantity: 1 }];
      }

      saveToStorage("listCart", updatedCart);

      return {
        ...state,
        listCart: updatedCart,
      };

    case "REMOVECART":
      const filteredCart = state.listCart.filter(
        (item) => item.id !== action.payload.id
      );

      // saveToStorage("listCart", filteredCart);

      return {
        ...state,
        listCart: filteredCart,
      };

    case "UPDATE_CART":
      return {
        ...state,
        listCart: action.payload,
      };

    case "UPDATEQUANTITY":
      return {
        ...state,
        listCart: state.listCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "ADDPAY":
      return {
        ...state,
        listPay: [...state.listPay, action.payload],
      };

    case "REMOVEPAY":
      return {
        ...state,
        listPay: state.listPay.filter((id) => id !== action.payload),
      };

    case "CLEAR_PAY":
      return {
        ...state,
        listPay: [],
      };

    case "ADDFAVORITE":
      const updatedFavoriteList = [...state.listFavorite, action.payload];

      saveToStorage("listFavorite", updatedFavoriteList);

      return {
        ...state,
        listFavorite: updatedFavoriteList,
      };

    case "REMOVEFAVORITE":
      const updatedFavoriteListAfterRemove = state.listFavorite.filter(
        (product) => product.id !== action.payload
      );

      saveToStorage("listFavorite", updatedFavoriteListAfterRemove);

      return {
        ...state,
        listFavorite: updatedFavoriteListAfterRemove,
      };

    default:
      return state;
  }
};

export default rootReducer;
