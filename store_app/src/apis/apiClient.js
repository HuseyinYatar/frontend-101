import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Check if error.response exists before destructuring
    if (error.response) {
      const { data } = error.response;
      // Use a fallback message if data.message is missing
      const errorMsg = data?.message || "An error occurred";

      toast.error(errorMsg);
      console.log("Interceptor Toast fired:", errorMsg);
    } else {
      toast.error("Network error: Server is unreachable");
    }

    return Promise.reject(error);
  },
);

const methods = {
  get: (url) => apiClient.get(url),
  post: (url, body) => apiClient.post(url, body),
  put: (url, body) => apiClient.put(url, body),
  delete: (url) => apiClient.delete(url),
};

const products = {
  list: () => methods.get("/products"),
  details: (id) => methods.get(`/products/${id}`),
};

const cart = {
  get: () => methods.get("/carts"),
  addItem: (productId, quantity = 1) =>
    apiClient.post(`/carts?productId=${productId}&quantity=${quantity}`, {}),
  remeoveItem: (productId, quantity) =>
    methods.delete(`/carts?productId=${productId}&quantity=${quantity}`),
};

export const request = {
  products,
  cart,
};
