import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";
// import { Greeting } from "./components/Greeting";

function App() {
  // const someGreeting = "Hello world";

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
      {/* <Greeting message={someGreeting} age={10} />
      <Greeting message="Lorem ipsum" age={10} />
      <Greeting message="dolor sit amet" age={10} /> */}

      <Todos todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
