import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  cartData: [],
  isLoading: false,
  error: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    saveDetails: (state, action) => {
      state.data = action.payload;
    },
    cartDetails: (state, action) => {
      console.log(action.payload)
      state.cartData = action.payload;
    },
  },
});

console.log(counterSlice);
export const { saveDetails, cartDetails } = counterSlice.actions;
export default counterSlice.reducer;
