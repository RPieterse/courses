import React from "react";
import { Todo } from "../models/todo";
import "./TodoList.css";

interface TodoListProps {
  items: Todo[];
  onTodoDelete: (item: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <div>
          <li key={todo.id}>{todo.text}</li>
          <button onClick={() => props.onTodoDelete(todo)}>DELETE</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
