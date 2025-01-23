"use client";

import React from "react";

interface IButton {
  label: string;
  bg : string
}
const Button: React.FC<
  IButton & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => { 

  return (
    <span>
          <button className={`text-white ${props.bg} font-bold py-2 px-6 rounded border-2 hover:bg-gray-700`}
              {...props}>
        {props.label}
      </button>
    </span>
  );
};

export default Button;
