import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";
import { AddTodoInput } from "./components/AddTodoInput";

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

  const removeTodo = (text: string): void => {
    setTodos(
      todos.filter((todosFilter) => {
        return todosFilter.text != text;
      })
    );
  };

  const addTodo = (propertyName: Todo) => {
    setTodos([...todos, propertyName]);
  };

  return (
    <>
      <AddTodoInput addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </>
  );
}

export default App;
