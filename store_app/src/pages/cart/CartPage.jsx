import { useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../apis/apiClient";
import { setCart } from "./cartSlice";
const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState({ id: null, type: null });

  if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
    return (
      <Typography variant="h5" sx={{ p: 3, textAlign: "center" }}>
        Sepetinizde ürün yok
      </Typography>
    );
  }

  const handleUpdateQuantity = async (productId, action) => {
    setLoadingStatus({ id: productId, type: action });

    try {
      let updatedCart;
      if (action === "add") {
        updatedCart = await request.cart.addItem(productId);
      } else {
        updatedCart = await request.cart.remeoveItem(productId, 1);
      }
      dispatch(setCart(updatedCart));
    } catch (error) {
      console.error("Cart update failed:", error);
    } finally {
      setLoadingStatus({ id: null, type: null });
    }
  };

  async function removeAllQuantity(productId, quantity) {
    setLoadingStatus({ id: productId, type: "remove" });
    try {
      await request.cart
        .remeoveItem(productId, quantity)
        .then((c) => dispatch(setCart(updatedCart)))
        .finally(setLoadingStatus({ id: null, type: null }));
    } catch (error) {
      console.error("Cart update failed:", error);
    }
  }

  // Calculate subtotal efficiently
  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product.price * item.product.quantity,
    0,
  );

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ width: 100 }}>Görsel</TableCell>
            <TableCell>Ürün</TableCell>
            <TableCell align="right">Fiyat</TableCell>
            <TableCell align="center">Adet</TableCell>
            <TableCell align="right">Toplam</TableCell>
            <TableCell align="center">Ýþlem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((item) => {
            const isAdding =
              loadingStatus.id === item.product.productId &&
              loadingStatus.type === "add";
            const isRemoving =
              loadingStatus.id === item.product.productId &&
              loadingStatus.type === "remove";

            return (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={`http://localhost:5000/images/${item.product.image}`}
                    alt={item.product.title}
                    style={{ width: 60, borderRadius: 4 }}
                  />
                </TableCell>
                <TableCell>{item.product.title}</TableCell>
                <TableCell align="right">{item.product.price} TL</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() =>
                      handleUpdateQuantity(item.product.productId, "remove")
                    }
                    disabled={loadingStatus.id === item.product.productId} // Disable others while loading
                  >
                    {isRemoving ? (
                      <CircularProgress size={24} />
                    ) : (
                      <RemoveCircleOutlineOutlinedIcon />
                    )}
                  </IconButton>

                  <Typography sx={{ mx: 2 }}>
                    {item.product.quantity}
                  </Typography>

                  <IconButton
                    color="primary"
                    onClick={() =>
                      handleUpdateQuantity(item.product.productId, "add")
                    }
                    disabled={loadingStatus.id === item.product.productId}
                  >
                    {isAdding ? (
                      <CircularProgress size={24} />
                    ) : (
                      <ControlPointIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  {(item.product.price * item.product.quantity).toFixed(2)} TL
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeAllQuantity(
                        item.product.productId,
                        item.product.quantity,
                      )
                    }
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartPage;
