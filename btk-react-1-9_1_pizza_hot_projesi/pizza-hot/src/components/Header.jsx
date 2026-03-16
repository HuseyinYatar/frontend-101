import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";
import { CardContext } from "../contexts/CardContext";
import Cart from "./Cart";
export default function Header() {
  // Destructure state and the toggle function from context
  const { state, changeMode } = useContext(ThemeContext);
  const { color, mode } = state;

  const { items } = useContext(CardContext);
  return (
    <header>
      <ThemeSelector />
      <nav
        className={`navbar navbar-expand bg-${color} border-bottom`}
        // Use the mode from context (light or dark)
        data-bs-theme={mode === "dark" ? "dark" : "light"}
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Pizza Hot
          </a>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-light border-0"
              onClick={() => changeMode(mode === "light" ? "dark" : "light")}
            >
              <i className={`bi bi-${mode === "light" ? "moon" : "sun"}`}></i>
            </button>

            <button
              type="button"
              className={`btn btn-${color} position-relative`}
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
            >
              <i className="bi bi-cart3"></i>
              <span className="ms-2">Cart</span>
              {items.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {items.reduce((total, item) => {
                    return total + item.quantity;
                  }, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
