import { createContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextInterface {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export function ThemeProvider({ children }: { children: JSX.Element }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
