import { convertDate } from '../../../@shared/util/convert-date';
import { TodoItem as TodoItemType } from '../model/todo.type';

interface TodoItemProps {
  todoItem: TodoItemType;
  onClick?: () => void;
  sideButton?: {
    textContent: string;
    onClick?: () => void;
  };
}
export const TodoItem = ({ todoItem, onClick, sideButton }: TodoItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`
      flex items-center justify-between relative 
      px-24  min-h-64 
      text-gray-400 bg-primary-50 rounded-md
      `}
    >
      <div className=" flex flex-col gap-y-4">
        <span>{todoItem.content}</span>
        <time className=" text-caption-2 font-caption-2 leading-caption-2 text-gray-300">
          {convertDate(todoItem.createdAt, 'yyyy.MM.dd')}
        </time>
      </div>
      {sideButton ? (
        <button
          className={`
          text-caption-2 font-caption-2 leading-caption-2
          bg-negative-400 text-white px-12 py-8 rounded-md opacity-60 
          hover:opacity-80 
          active:-translate-x-[1px] active:translate-y-[1px] active:opacity-80
          `}
          onClick={sideButton.onClick}
        >
          {sideButton.textContent}
        </button>
      ) : null}
    </div>
  );
};
