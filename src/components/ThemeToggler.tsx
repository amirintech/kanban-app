import { useState } from "react";
import useTheme from "../hooks/useTheme";
import Toggle from "./shared/Toggle";
import iconLight from "../assets/icons/icon-light-theme.svg";
import iconDark from "../assets/icons/icon-dark-theme.svg";

export default function ThemeToggler() {
  const theme = useTheme();
  const [isToggled, setIsToggled] = useState(theme?.currentTheme === "dark");

  return (
    <div className="flex items-center justify-center gap-6 rounded-md bg-gray-200 p-3 duration-150 dark:bg-gray-800">
      <img src={iconLight} />

      <Toggle
        isToggled={isToggled}
        onToggle={() => {
          theme?.toggleTheme();
          setIsToggled(!isToggled);
        }}
      />

      <img src={iconDark} />
    </div>
  );
}
