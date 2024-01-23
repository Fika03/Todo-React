import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface IAddTodoInputProps {
  addTodo: (text: Todo) => void;
}

export const AddTodoInput = (props: IAddTodoInputProps) => {
  const [newTodo, setNewTodo] = useState<Todo>(new Todo("", false));

  const handleAddClick = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.text === "") {
      return;
    }

    props.addTodo(newTodo);

    setNewTodo({ text: "", done: false });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.value;

    setNewTodo({ ...newTodo, text: propertyName });
  };

  return (
    <>
      <form onSubmit={handleAddClick}>
        <input
          name="text"
          onChange={handleChange}
          value={newTodo.text}
          type="text"
        />
        <button>Lägg till</button>
      </form>
    </>
  );
};
