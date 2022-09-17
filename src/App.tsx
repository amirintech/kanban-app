import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  return (
    <div className="dark p-2">
      <div className="rounded p-3 dark:bg-gray-700"></div>
    </div>
  );
}

export default App;
