import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { request } from "../../apis/apiClient";

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    return await request.products.list();
  },
);

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    return await request.products.details(id);
  },
);

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState({
  status: "pending",
  isLoaded: false,
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "idle";
      productAdapter.setAll(state, action.payload);
    });

    builder.addCase(fetchProductsById.pending, (state) => {
      state.status = "pendingById";
    });
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.status = "pendingById";
      productAdapter.upsertOne(state, action.payload);
    });
  },
});

export const { selectById: selectProductById, selectAll: selectAllProducts } =
  productAdapter.getSelectors((state) => state.product);
