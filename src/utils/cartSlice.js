import { createSlice } from "@reduxjs/toolkit";

//create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // object having different kinds of reducers with their action
    addIdem: (state, action) => {
      //directly modifying state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addIdem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
