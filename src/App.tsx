import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
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
        <Sidebar isOpned={true}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            amet nostrum, delectus rem quisquam veniam soluta alias possimus
            accusantium minus fugiat excepturi ratione dolorum esse debitis
            deserunt ipsa. Cumque debitis molestias illum vel dolore totam,
            exercitationem architecto velit dolorum eius, minima necessitatibus
            sed nostrum voluptas dolor adipisci in dignissimos nisi.
          </span>
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
