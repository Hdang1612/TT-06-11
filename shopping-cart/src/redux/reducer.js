import { saveToStorage } from "../Data/localStorage";
import { getFromStorage } from "../Data/localStorage";
const initState = {
  listCart: getFromStorage("listCart") || [],
  listPay: [],
  listFavorite: getFromStorage("listFavorite") || [],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action); //check
  // console.log(state.listFavorite);
  switch (action.type) {
    case "ADDCART":
      return {
        ...state,
        listCart: action.payload,
      };

    case "REMOVECART":
      return {
        ...state,
        listCart: action.payload,
      };

    case "UPDATE_CART":
      return {
        ...state,
        listCart: action.payload,
      };

    case "UPDATEQUANTITY":
      return {
        ...state,
        listCart: action.payload,
      };

    case "ADDPAY":
      return {
        ...state,
        listPay: action.payload,
      };

    case "REMOVEPAY":
      return {
        ...state,
        listPay: action.payload,
      };

    case "CLEARPAY":
      return {
        ...state,
        listPay: [],
      };

    case "ADDFAVORITE":
      return {
        ...state,
        listFavorite: action.payload,
      };

    case "REMOVEFAVORITE":
      return {
        ...state,
        listFavorite: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
