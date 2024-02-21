import {
  useTodoDispatch,
  useTodoState,
} from '../../@entities/todo/hook/use-todo';
import { TodoItem as TodoItemType } from '../../@entities/todo/model/todo.type';
import { TodoItem } from '../../@entities/todo/ui/todo-item';

export const TodoList = () => {
  const { todoList } = useTodoState();
  const { deleteTodoItem } = useTodoDispatch();
  const onClickTodoItem = (todoItem: TodoItemType) => {
    deleteTodoItem(todoItem);
  };
  return (
    <div className=" flex flex-col gap-y-12">
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          sideButton={{
            textContent: 'Delete',
            onClick: () => onClickTodoItem(todoItem),
          }}
        />
      ))}
    </div>
  );
};
