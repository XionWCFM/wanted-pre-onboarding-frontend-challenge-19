import { addTodo, deleteTodo } from '../../../store/slice/todo-slice';
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { CreateTodoItemParam, DeleteTodoItemParam } from '../model/todo.type';

export const useTodoState = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  return { todoList };
};

export const useTodoDispatch = () => {
  const dispatch = useDispatch();
  const addTodoItem = (todoItem: CreateTodoItemParam) => {
    return dispatch(addTodo(todoItem));
  };
  const deleteTodoItem = (todoItem: DeleteTodoItemParam) => {
    return dispatch(deleteTodo(todoItem));
  };
  return {
    addTodoItem,
    deleteTodoItem,
  };
};
