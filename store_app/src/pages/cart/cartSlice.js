import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../apis/apiClient";
const initialState = {
  cart: null,
  status: "idle",
};

export const AddItemToCart = createAsyncThunk(
  "addItemToCart",
  async ({ productId, quantity = 1 }) => {
    try {
      return await request.cart.addItem(productId, quantity);
    } catch (error) {
      consol.log(error);
    }
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    (builder.addCase(AddItemToCart.pending, (state, action) => {
      console.log(action);
      state.status = "pending" + action.meta.arg.productId;
    }),
      builder.addCase(AddItemToCart.fulfilled, (state, action) => {
        console.log(action);
        state.cart = action.payload;
        state.status = "idle";
      }),
      builder.addCase(AddItemToCart.rejected, (state, action) => {
        console.log(action);
        state.status = "pending";
      }));
  },
});

export const { setCart } = cartSlice.actions;
