import { useContext, createContext, useState, ReactNode } from "react";

type ThemeContxetprops = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContxetprops);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
