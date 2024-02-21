import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" w-full md:max-w-768 flex flex-col px-24 py-48">
        {children}
      </div>
    </div>
  );
};
