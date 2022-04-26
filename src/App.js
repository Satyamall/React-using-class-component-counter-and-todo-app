import { Counter } from "./Counter/Counter";
import { Todo } from "./Counter/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter title="Counter for My App" />
      <Todo />
    </div>
  );
}
