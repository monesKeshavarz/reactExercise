import React, { useId, type FC, type ReactNode } from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  validation:any;
}

const RadioButton: FC<RadioButtonProps> = ({ label, validation, ...restProps }) => {
  const id = useId();
  return (
    <div className="inline-flex items-center">
      <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor={id}>
        <input
          id={id}
          name="type"
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-500 text-pink-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full  before:bg-blue-gray-800   before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          {...restProps}
          {...validation}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-600 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
      </label>
      <label className="mt-px cursor-pointer select-none font-light text-gray-700" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default RadioButton;
