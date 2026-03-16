import ThemeSelectorLinks from "./ThemeSelectorLinks.jsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import "./ThemeSelector.css";

function ThemeSelector() {
  const themes = ["danger", "warning", "primary", "secondary", "dark", "auto"];

  const { changeColor } = useContext(ThemeContext);

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button
        className="btn btn-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <i className="bi bi-circle-half my-1 theme-icon-active"></i>
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end shadow d-flex flex-wrap"
        style={{ maxWidth: "150px" }}
      >
        {themes.map((t) => (
          <ThemeSelectorLinks color={t} key={t} setColor={changeColor} />
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelector;
