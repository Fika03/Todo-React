import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Lär dig react", false),
    new Todo("Lär dig munspel", false),
  ]);

  const toggleTodo = (textFromClickedTodo: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.text === textFromClickedTodo) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  console.log(todos);

  return (
    <>
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
