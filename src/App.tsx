import { useState } from "react";
import Toggle from "./components/shared/Toggle";

function App() {
  const [state, setState] = useState(true);

  // const [selectedItem, setSelected] = useState("");

  return (
    <div className="dark p-2">
      <div className="rounded bg-gray-200 p-3 dark:bg-gray-700">
        <Toggle
          isToggled={state}
          onToggle={(state) => {
            setState(state);
            console.log(state);
          }}
        />
      </div>
    </div>
  );
}

export default App;
