import React from "react";

export type InputProps = {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="w-full">
      <label htmlFor={props.id} className="text-white">
        {props.label}
      </label>
      <input
        id={props.id}
        className="border-2 border-white rounded-md w-full p-2 bg-transparent focus:outline-none focus:border-purple-500"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
