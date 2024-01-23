import { ChangeEvent } from "react";
import { Todo } from "../models/Todo";

interface IAddTodoInputProps {
  todo: Todo;
  addTodo: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddTodoInput = (props: IAddTodoInputProps) => {
  const handleAddClick = () => {};
  const handleChange = (e: ChangeEvent) => {};

  return (
    <>
      <form action="submit" onSubmit={handleAddClick}>
        <input
          name="text"
          onChange={handleChange}
          value={props.todo.text}
          type="text"
        />
        <button>Lägg till</button>
      </form>
    </>
  );
};
