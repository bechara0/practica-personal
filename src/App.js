import { useState } from "react";
import "./App.css";
import { Entradas } from "./components/Entradas";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="App">
      <Header />
      <Entradas setListadoState={setListadoState} />
      <TodoItem listadoState={listadoState} setListadoState={setListadoState} />
    </div>
  );
}

export default App;
