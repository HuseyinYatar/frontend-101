import React from "react";
function ThemeSelectorLinks({ color, setColor }) {
  return (
    <li className="p-1">
      <button
        type="button"
        className={`btn bg-${color} theme-square`}
        title={color} // Shows the color name on hover
        onClick={() => setColor(color)}
      ></button>
    </li>
  );
}

export default ThemeSelectorLinks;
