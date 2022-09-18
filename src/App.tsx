import { useState } from "react";
import Modal from "./components/shared/Modal";
import ThemeToggler from "./components/ThemeToggler";
import useTheme from "./hooks/useTheme";

function App() {
  const theme = useTheme();
  const [state, setState] = useState(true);

  return (
    <div className={`dark ${theme?.currentTheme}`}>
      <div className="rounded bg-gray-200 p-3 duration-150 dark:bg-gray-800">
        <ThemeToggler />
        <Modal show>
          <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            perspiciatis porro eaque asperiores dolores soluta totam. Maiores
            fugit nemo eum!
          </>
        </Modal>
      </div>
    </div>
  );
}

export default App;
