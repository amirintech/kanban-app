import { useState } from "react";
import Toggle from "./components/shared/Toggle";
import ThemeToggler from "./components/ThemeToggler";
import useTheme from "./hooks/useTheme";

function App() {
  const theme = useTheme();
  const [state, setState] = useState(true);

  return (
    <div className={`${theme?.currentTheme}`}>
      <div className="rounded bg-gray-200 p-3 dark:bg-gray-700">
        <ThemeToggler />
      </div>
    </div>
  );
}

export default App;
