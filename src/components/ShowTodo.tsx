import { Todo } from "../models/Todo";

interface IShowTodoProps {
  todo: Todo;
  handleToggleTodo: (text: string) => void;
  handleRemoveTodo: (textFromClickedTodo: string) => void;
}

export const ShowTodo = (props: IShowTodoProps) => {
  const handleClick = () => {
    props.handleToggleTodo(props.todo.text);
  };

  const handleRemoveClick = () => {
    props.handleRemoveTodo(props.todo.text);
  };

  return (
    <div>
      <h3 className={props.todo.done ? "done" : ""}>{props.todo.text}</h3>
      <button onClick={handleClick}>
        {props.todo.done ? "Markera som oklar" : "Markera som klar"}
      </button>
      <button onClick={handleRemoveClick}>Ta bort</button>
    </div>
  );
};
