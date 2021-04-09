import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState("grey");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Hello world
      <button onClick={() => setColor("black")}>Dark</button>
      <button onClick={() => setColor("grey")}>Grey</button>
      <button onClick={() => setFontSize((s) => s + 2)}>Light</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
