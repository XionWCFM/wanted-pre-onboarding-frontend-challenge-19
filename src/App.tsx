import { useTodoState } from './@entities/todo/hook/use-todo';
import { TodoItem } from './@entities/todo/ui/todo-item';
import { TodoForm } from './@features/ui/todo-form';
import { Layout } from './@shared/common-ui/layout';
import { Spacing } from './@shared/common-ui/spacing';

function Root() {
  const { todoList } = useTodoState();
  return (
    <Layout>
      <TodoForm />
      <Spacing className=" mt-24" />
      <div className=" flex flex-col gap-y-12">
        {todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            sideButton={{
              textContent: 'Delete',
              onClick: () => {},
            }}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Root;
