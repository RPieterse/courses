import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  const todoDeleteHandler = (todo: Todo) => {
    setTodos((prev) => [...prev.filter((td) => td.id !== todo.id)]);
  };

  return (
    <div className="App">
      <NewTodo onNewTodo={todoAddHandler} />
      <TodoList onTodoDelete={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
