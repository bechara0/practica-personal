import "./App.css";
import { Entradas } from "./components/Entradas";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Entradas />
      <TodoItem />
    </div>
  );
}

export default App;
