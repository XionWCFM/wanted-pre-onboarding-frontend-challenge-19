import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ className, ...attributes }: ButtonProps) => {
  return <button className={` ${className}`} {...attributes}></button>;
};

export default Button;
