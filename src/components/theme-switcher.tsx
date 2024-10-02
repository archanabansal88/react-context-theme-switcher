import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p className="themeTitleText">Current theme: {theme}</p>
      <button onClick={toggleTheme} className={theme + "ButtonTheme"}>
        Toggle theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
