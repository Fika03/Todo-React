import { Todo } from "../models/Todo";
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
  todos: Todo[];
  toggleTodo: (text: string) => void;
}

export const Todos = ({ todos, toggleTodo }: ITodosProps) => {
  const html = todos.map((todo, i) => {
    return <ShowTodo todo={todo} key={i} handleToggleTodo={toggleTodo} />;
  });

  return <>{html}</>;
};
