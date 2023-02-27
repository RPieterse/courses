import { RequestHandler } from "express";
import { Todo } from "../models/todo";

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
  const title = (req.body as { title: string }).title;
  const newTodo = new Todo(Math.random().toString(), title);
  TODOS.push(newTodo);
  res
    .status(201)
    .json({ message: "Todo successfully created", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (_, res) => {
  res.json({ message: "Success", todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const { title } = req.body as { title: string };

  const updateThisTodoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (updateThisTodoIndex === -1) {
    throw new Error("Could not find todo");
  }
  TODOS[updateThisTodoIndex] = new Todo(id, title);
  res.status(200).json({
    message: "Todo updated!",
    updatedTodo: TODOS[updateThisTodoIndex],
  });
};

export const deleteTodo: RequestHandler = (req, res) => {
  const { id } = req.params;
  const deleteThisTodoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (deleteThisTodoIndex === -1) {
    throw new Error("Could not find todo");
  }

  TODOS = TODOS.filter((todo) => todo.id != id);
  res.status(200).json({ message: "Todo successfully deleted" });
};
