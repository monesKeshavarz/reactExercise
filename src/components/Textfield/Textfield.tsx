import React, { type ReactNode, type FC, useId } from 'react';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: ReactNode;
  validation: any;
}

const Textfield: FC<TextfieldProps> = ({ label, helperText, validation, icon, ...restProps }) => {
  const id = useId();
  return (
    <>
      <div className=" w-2/4 pb-2">
        {Boolean(label) && (
          <label className=" text-md font-medium text-slate-600 pb-1" htmlFor={id}>
            {label}
          </label>
        )}
        <div className=" w-full  flex items-center  h-10 border-2 border-transparent  bg-pink-200 rounded-sm overflow-hidden focus-within:border-fuchsia-300 focus-within:border-2">
          <input
            className="w-full h-full bg-transparent outline-none  p-0.5 "
            type="text"
            id={id}
            {...validation}
            {...restProps}
          />
          {Boolean(icon) && <span>{icon}</span>}
        </div>
        {Boolean(helperText) && <p className=" text-slate-400 px-1 pt-0.5">{helperText}</p>}
      </div>
    </>
  );
};
export default Textfield;
