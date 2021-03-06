import React from "react";
import ReactDOM from "react-dom";

import Tetris from "./components/Tetris";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Tetris />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
