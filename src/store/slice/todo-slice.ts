import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  todoInitialState,
  todoService,
} from '../../@entities/todo/model/todo.service';
import {
  CreateTodoItemParam,
  DeleteTodoItemParam,
  TodoItem,
} from '../../@entities/todo/model/todo.type';

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: todoInitialState,
  reducers: {
    addTodo: (
      state: TodoItem[],
      action: PayloadAction<CreateTodoItemParam>,
    ) => {
      return todoService.addTodo(state, todoService.createTodo(action.payload));
    },
    clearTodo: () => {
      return todoService.clearTodo();
    },
    deleteTodo: (
      state: TodoItem[],
      action: PayloadAction<DeleteTodoItemParam>,
    ) => {
      return todoService.deleteTodo(state, action.payload);
    },
  },
});

export const { addTodo, clearTodo, deleteTodo } = todoSlice.actions;
