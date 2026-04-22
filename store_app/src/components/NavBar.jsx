import React from "react";
import { AppBar, Toolbar, IconButton, Box, Badge } from "@mui/material";
import { Link } from "react-router-dom";
// Example Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
export default function NavBar() {
  const { cart } = useSelector((status) => status.cart);
  const itemCount = cart?.cartItems.reduce(
    (acc, i) => acc + i.product.quantity,
    0,
  );
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* LEFT SIDE ICONS */}
        <IconButton component={Link} to="/" color="inherit">
          <HomeIcon />
        </IconButton>
        <IconButton component={Link} to="/product" color="inherit">
          Product
        </IconButton>

        {/* SPACER: This pushes everything after it to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* RIGHT SIDE ICONS */}
        <Badge badgeContent={itemCount}>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Badge>
        <IconButton component={Link} to="/login" color="inherit">
          Login
        </IconButton>

        <IconButton component={Link} to="/register" color="inherit">
          Register
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
