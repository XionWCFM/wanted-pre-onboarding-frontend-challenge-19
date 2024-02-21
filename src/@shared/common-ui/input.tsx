import { ComponentPropsWithoutRef, Ref, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef(
  ({ className, ...attributes }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <input className={`${className}`} {...attributes} ref={ref} />;
  },
);
