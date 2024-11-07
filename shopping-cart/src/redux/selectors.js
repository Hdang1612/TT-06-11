export const cartSelectors = (state) => {
    return state.listCart
}
export const payListSelectors = (state) => {
    return state.listPay
}

// export const payListSelectors = (state) => {
//     const listPay = state.listPay;
  
//     const totalPrice = listPay.reduce((total, product) => {
//       return total + product.price * product.quantity;  
//     }, 0); 
  
//     return totalPrice; 
//   };