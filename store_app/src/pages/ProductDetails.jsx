import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { request } from "../apis/apiClient";
import ProductNotFoundPage from "./ProductNotFoundPage";
import { useCartContext } from "../../context";
import { ReportProblemOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "./cart/cartSlice";
export default function ProductDetails() {
  const data = useLoaderData();

  const { id, title, description, image, price } = data;

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ProductQuantity = cart.cartItems.find((i) => i.product.productId === id)
    ?.product?.quantity;

  function handleAddItem(productId) {
    request.cart.addItem(productId).then((c) => dispatch(setCart(c)));
  }
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid size={{ lg: 4, md: 8, xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <img
              src={`http://localhost:5000/images/${image}`}
              alt=""
              style={{ width: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid size={{ lg: 8, md: 4, xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h2" component={"h2"}>
              {title}
            </Typography>
            <Typography variant="body1" component={"h2"}>
              {description}
            </Typography>

            <Typography
              variant="body1"
              component={"h2"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // This adds 8px of space between the icon and text
                mt: 3,
              }}
            >
              <ReportProblemOutlined />
              sepetinizde {" " + ProductQuantity + " "} bulunmakta
            </Typography>
            <Button
              onClick={() => handleAddItem(id)}
              sx={{
                mt: 3,
              }}
              variant="contained"
            >
              Sepete Ekle
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export async function ProductDetailLoader({ params }) {
  const { id } = params;
  const data = await request.products.details(id);

  return data;
}
