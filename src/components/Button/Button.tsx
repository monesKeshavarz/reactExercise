import React, { type ReactNode, type FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outline' | 'text';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, children, ...restProps }) => {
  const ButtonStyle = {
    contained: 'bg-fuchsia-400 hover:text-white active:text-white',
    outline: 'bg-transparent border  border-fuchsia-400 ',
    text: 'bg-transparent'
  };
  return (
    <button
      {...restProps}
      className={` ${
        ButtonStyle[variant ?? 'text']
      }  w-2/4   px-4 py-2  rounded-sm  text-amber-800 hover:text-white active:text-white hover:bg-fuchsia-500 active:bg-fuchsia-600`}>
      {children}
    </button>
  );
};
export default Button;
