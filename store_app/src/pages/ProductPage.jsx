import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import { request } from "../apis/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../pages/product/productSlice";
import { fetchProducts } from "../pages/product/productSlice";
export default function ProductPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Grid container spacing={3}>
      {data.map((product) => (
        <Grid key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export async function ProductLoader() {
  const data = await request.products.list();
  return data;
}
