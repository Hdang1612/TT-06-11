
const initState = {
    listCart: JSON.parse(localStorage.getItem('cart')) || [],
    
  };
  
  const rootReducer = (state = initState, action) => {
    console.log(state, action);
  switch (action.type) {
    case "ADDCART":
      const index = state.listCart.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedListCart;
      if (index !== -1) {
        updatedListCart = [...state.listCart];
        updatedListCart[index].quantity += 1;
      } else {
        updatedListCart = [...state.listCart, { ...action.payload, quantity: 1 }];
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(updatedListCart));

      return {
        ...state,
        listCart: updatedListCart,
      };
      
  
      default:
        return state;
    }
  };
  
  export default rootReducer;