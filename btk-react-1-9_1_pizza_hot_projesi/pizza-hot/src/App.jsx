import { useContext } from "react";
import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import Cart from "./components/Cart";
export default function App() {
  const { state } = useContext(ThemeContext);
  const { mode } = state;
  return (
    <div
      className={`${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
    >
      <Cart></Cart>
      <Header />
      <div className="container my-4">
        <PizzaList />
      </div>
    </div>
  );
}
