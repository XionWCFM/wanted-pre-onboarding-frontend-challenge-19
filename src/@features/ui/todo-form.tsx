import { ChangeEvent, FormEvent, useRef, FocusEvent } from 'react';
import { useTodoDispatch } from '../../@entities/todo/hook/use-todo';
import { Input } from '../../@shared/common-ui/input';
import { useInput } from '../../@shared/hooks/use-input';
import { Button } from '../../@shared/common-ui/button';
import { assert } from '@xionhub/assert';
import ErrorCaption from '../../@shared/common-ui/error-caption';

export const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodoItem } = useTodoDispatch();
  const {
    input: todoContent,
    setInput: setTodoContent,
    error,
    setError,
  } = useInput();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoContent.trim().length <= 5) return;

    addTodoItem({ content: todoContent });
    assert(inputRef.current !== null);
    inputRef.current.value = '';
    setTodoContent('');
  };

  const onTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value.trim());
    if (event.target.value.trim().length >= 5) {
      setError((s) => ({ ...s, isError: false }));
    }
  };

  const onTodoInputBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (event.target.value.trim().length <= 5) {
      setError({
        errorContent: '할 일은 5자 이상이어야 해요',
        isError: true,
      });
    }
  };

  return (
    <section className=" flex flex-col w-full min-h-64">
      <form className=" w-full flex flex-col " onSubmit={onSubmit}>
        <div className=" flex w-full gap-x-24">
          <Input
            className=" w-full"
            name="todo-input"
            placeholder={'할일을 입력해주세요'}
            ref={inputRef}
            onChange={onTodoInputChange}
            onBlur={onTodoInputBlur}
          />
          <Button type={'submit'}>Add</Button>
        </div>
        {error.isError ? (
          <ErrorCaption>{error.errorContent}</ErrorCaption>
        ) : null}
      </form>
    </section>
  );
};
