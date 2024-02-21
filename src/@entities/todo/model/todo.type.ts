export interface TodoItem {
  id: UniqueId;
  isDone: boolean;
  content: string;
  createdAt: IsoDate;
}

export type CreateTodoItemParam = Pick<TodoItem, 'content'>;

export type DeleteTodoItemParam = TodoItem | UniqueId;
export interface TodoServicePort {
  addTodo: (todoList: TodoItem[], todoItem: TodoItem) => TodoItem[];
  deleteTodo: (
    todoList: TodoItem[],
    todoItem: DeleteTodoItemParam,
  ) => TodoItem[];
  createTodo: (todoItem: CreateTodoItemParam) => TodoItem;
  clearTodo: () => TodoItem[];
}
