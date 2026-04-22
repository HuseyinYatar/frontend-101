import React from "react";
import { Outlet } from "react-router-dom";
import ButtonUsage from "../components/ButtonUsage";
import NavBar from "../components/Navbar";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
