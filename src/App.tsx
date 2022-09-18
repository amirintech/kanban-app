import { useState } from "react";
import Dropdown from "./components/shared/Dropdown";

function App() {
  const [state, setState] = useState(["Todo", "Doing", "Done"]);

  const [selectedItem, setSelected] = useState("");

  return (
    <div className="dark p-2">
      <div className="rounded bg-gray-200 p-3 dark:bg-gray-700">
        <Dropdown
          label="Select an item"
          items={state}
          selectedItem={selectedItem}
          onSelect={(selectedItem) => setSelected(selectedItem)}
        />
      </div>
    </div>
  );
}

export default App;
