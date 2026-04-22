import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardActionArea,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { request } from "../apis/apiClient";
import { useCartContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../pages/cart/cartSlice";
const ProductCard = ({ product }) => {
  const { id, title, description, image, price } = product;
  const dispatch = useDispatch();
  const { status } = useSelector((status) => status.cart);
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 3,
      }}
    >
      <CardActionArea component={Link} to={`/product/${id}`}>
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:5000/images/${image}`}
          alt={title}
          sx={{ objectFit: "contain", p: 2 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2" noWrap>
            {title}
          </Typography>
          <Box sx={{ mt: 2, textAlign: "end" }}>
            <Typography variant="h6" color="primary.main">
              ${price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{ justifyContent: "space-between", px: 2, pb: 2, mt: "auto" }}
      >
        <Button
          size="small"
          component={Link}
          to={`/product/${id}`}
          variant="outlined"
        >
          Details
        </Button>
        <Button
          size="small"
          variant="contained"
          loading={status === "pending" + id}
          onClick={() => dispatch(AddItemToCart({ productId: id }))}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
