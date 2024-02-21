import { ChangeEvent, FormEvent } from 'react';
import { useTodoDispatch } from '../../@entities/todo/hook/use-todo';
import { Input } from '../../@shared/common-ui/input';
import { useInput } from '../../@shared/hooks/use-input';

export const TodoForm = () => {
  const { addTodoItem } = useTodoDispatch();
  const {
    input: todoContent,
    setInput: setTodoContent,
    debounceSetInput: debounceSetTodoContent,
  } = useInput();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem({ content: todoContent });
    setTodoContent('');
  };

  const onTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounceSetTodoContent(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder={'할일을 입력해주세요'}
        value={todoContent}
        onChange={onTodoInputChange}
      />
    </form>
  );
};
