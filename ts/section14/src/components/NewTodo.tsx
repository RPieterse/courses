import React, { useRef } from "react";
import "./NewTodo.css";
interface NewTodoProps {
  onNewTodo: (todo: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoRef = useRef<HTMLInputElement>(null);

  function createNewTodo(event: React.FormEvent) {
    event.preventDefault();
    if (todoRef?.current) {
      const currentText = todoRef.current.value;
      if (currentText) {
        props.onNewTodo(currentText);
        todoRef.current.value = "";
      }
    }
  }

  return (
    <form onSubmit={createNewTodo}>
      <label htmlFor="todo-text">Todo Text</label>
      <div>
        <input ref={todoRef} type="text" id="todo-text" />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
