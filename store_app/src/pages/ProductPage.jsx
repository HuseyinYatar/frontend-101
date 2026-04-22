import React from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import { request } from "../apis/apiClient";
export default function ProductPage() {
  const data = useLoaderData();
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
