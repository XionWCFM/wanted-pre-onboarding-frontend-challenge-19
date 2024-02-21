import { PropsWithChildren } from 'react';

interface ErrorCaptionProps extends PropsWithChildren {}

const ErrorCaption = ({ children }: ErrorCaptionProps) => {
  return (
    <span className=" text-negative-400 text-caption-1 leading-caption-1 font-caption-1">
      {children}
    </span>
  );
};

export default ErrorCaption;
