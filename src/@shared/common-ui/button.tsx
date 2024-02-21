import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = ({ className, ...attributes }: ButtonProps) => {
  return (
    <button
      className={` active:translate-y-[1px] active:-translate-x-[1px] text-white bg-primary-500 px-24 py-4 rounded-sm ${className}`}
      {...attributes}
    ></button>
  );
};
