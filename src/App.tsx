import { useState } from "react";

import ThemeToggler from "./components/ThemeToggler";
import useTheme from "./hooks/useTheme";
import data from "./assets/data/data.json";
import TaskCard from "./components/TaskCard";

function App() {
  const theme = useTheme();
  const [state, setState] = useState(true);

  return (
    <div className={`${theme?.currentTheme}`}>
      <div className="rounded bg-gray-200 p-3 duration-150 dark:bg-gray-800">
        <ThemeToggler />
        {data.boards[0].columns[2].tasks.map((task) => (
          <TaskCard {...task} />
        ))}
      </div>
    </div>
  );
}

export default App;
