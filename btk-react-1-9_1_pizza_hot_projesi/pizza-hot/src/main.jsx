import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CardContextProvider } from "./contexts/CardContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CardContextProvider>
  </StrictMode>,
);
