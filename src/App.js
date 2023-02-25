import React from "react";
import "./App.css";
import Board from "./components/board.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="title">Kanban Board</h3>
        <Board />
      </header>
    </div>
  );
}

export default App;
