import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "counter",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === productId
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== productId
          );
        }
      }
    },
    removeAllFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
