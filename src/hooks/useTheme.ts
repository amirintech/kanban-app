import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error(
      "useTheme context hook must be used inside of a ThemeProvider."
    );

  return context;
}
