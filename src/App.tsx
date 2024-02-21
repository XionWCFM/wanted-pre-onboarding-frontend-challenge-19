import { TodoForm } from './@features/ui/todo-form';
import { Layout } from './@shared/common-ui/layout';
import { Spacing } from './@shared/common-ui/spacing';
import { TodoList } from './components/List/todo-list';

function Root() {
  return (
    <Layout>
      <TodoForm />
      <Spacing className=" mt-24" />
      <TodoList />
    </Layout>
  );
}

export default Root;
