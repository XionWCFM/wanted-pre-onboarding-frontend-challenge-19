import { ComponentPropsWithoutRef, Ref, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef(
  ({ className, ...attributes }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        className={` focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md bg-gray-100 placeholder:text-gray-400 px-24 py-6 ${className}`}
        {...attributes}
        ref={ref}
      />
    );
  },
);
