import { useState } from "react";
import BoardsNavigator from "./components/BoardsNavigator";
import ThemeToggler from "./components/ThemeToggler";
import useTheme from "./hooks/useTheme";
import data from "./assets/data/data.json";

function App() {
  const theme = useTheme();
  const [state, setState] = useState("Platform Launch");

  return (
    <div className={`${theme?.currentTheme}`}>
      <div className="rounded bg-gray-200 p-3 duration-150 dark:bg-gray-800">
        <ThemeToggler />
        <BoardsNavigator
          onSelect={(name) => setState(name)}
          selectedBoard={state}
          boards={data.boards}
        />
      </div>
    </div>
  );
}

export default App;
