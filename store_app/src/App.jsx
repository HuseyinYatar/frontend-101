import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/ProductPage";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import ButtonUsage from "./components/ButtonUsage";
import HomePage from "./pages/HomePage";
import { ProductLoader } from "./pages/ProductPage";
import { ProductDetailLoader } from "./pages/ProductDetails";
import ProductNotFoundPage from "./pages/ProductNotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { request } from "./apis/apiClient";
import CartPage from "./pages/cart/CartPage.jsx";
import { useDispatch } from "react-redux";
import { setCart } from "./pages/cart/cartSlice.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    HydrateFallback: () => <div>Loading page...</div>,
    errorElement: <ProductNotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "product",
        children: [
          { index: true, element: <Product />, loader: ProductLoader },
          {
            path: ":id",
            element: <ProductDetails />,
            loader: ProductDetailLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispacth = useDispatch();
  useEffect(() => {
    request.cart.get().then((c) => dispacth(setCart(c)));
  }, []);
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="light" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
