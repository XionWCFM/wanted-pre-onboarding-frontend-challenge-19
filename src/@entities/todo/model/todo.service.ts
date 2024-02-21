import { uuid } from '../../../@shared/util/uuid';
import {
  CreateTodoItemParam,
  DeleteTodoItemParam,
  TodoItem,
  TodoServicePort,
} from './todo.type';

export const todoInitialState: TodoItem[] = [];

const addTodo = (todoList: TodoItem[], todoItem: TodoItem) => {
  return [...todoList, todoItem];
};

const createTodo = (todoItem: CreateTodoItemParam) => {
  const newTodoItem: TodoItem = {
    content: todoItem.content,
    createdAt: new Date().toISOString(),
    id: uuid(),
    isDone: false,
  };
  return newTodoItem;
};

const deleteTodo = (todoList: TodoItem[], todo: DeleteTodoItemParam) => {
  return todoList.filter((todoItem) => {
    if (typeof todo === 'string') {
      return todoItem.id !== todo;
    }
    return todoItem.id !== todo?.id;
  });
};

const clearTodo = () => {
  return [];
};

export const todoService: TodoServicePort = {
  addTodo,
  createTodo,
  deleteTodo,
  clearTodo,
};
