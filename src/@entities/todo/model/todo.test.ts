import { todoService } from './todo.service';
import { TodoItem } from './todo.type';

describe('todoService의 동작을 테스트합니다.', () => {
  test('addTodo는 첫번째 인수의 배열에 두번째 인수를 맨뒤로 추가한 결과물을 원본에 영향없이 반환합니다.', () => {
    const todoList = [] as TodoItem[];
    const mockTodoItem = {
      content: 'hello world',
      createdAt: '',
      id: '',
      isDone: false,
    };
    const addList = todoService.addTodo(todoList, mockTodoItem);
    expect(todoList.length).toBe(0);
    expect(addList.length).toBe(1);
    expect(addList[addList.length - 1]).toEqual(mockTodoItem);
  });
  test('deleteTodo는 두번째 인수와 동일한 id를 가지는 요소를 제거한 결과물을 원본에 영향없이 반환합니다.', () => {
    const todoList = [
      {
        content: 'hello world',
        createdAt: '',
        id: 'mockId',
        isDone: false,
      },
    ];
    const mockTodoItem = {
      content: 'hello world',
      createdAt: '',
      id: 'mockId',
      isDone: false,
    };
    const deleteList = todoService.deleteTodo(todoList, mockTodoItem);
    expect(deleteList.length).toBe(0);
    expect(todoList.length).toBe(1);
  });
});
