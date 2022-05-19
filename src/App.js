import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h5> hello from main section</h5>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
