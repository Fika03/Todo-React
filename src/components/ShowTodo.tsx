import { Todo } from "../models/Todo";

interface IShowTodoProps {
  todo: Todo;
  handleToggleTodo: (text: string) => void;
}

export const ShowTodo = (props: IShowTodoProps) => {
  const handleClick = () => {
    props.handleToggleTodo(props.todo.text);
  };

  return (
    <div>
      <h3 className={props.todo.done ? "done" : ""}>{props.todo.text}</h3>
      <button onClick={handleClick}>
        {props.todo.done ? "Markera som oklar" : "Markera som klar"}
      </button>
    </div>
  );
};
