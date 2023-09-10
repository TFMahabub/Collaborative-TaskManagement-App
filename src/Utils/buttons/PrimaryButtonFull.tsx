import React from "react";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButtonFull = ({ children, ...attributs }: PropsType) => {
  return (
    <button
      {...attributs}
      className="bg-primary active:scale-105 w-full py-[6px] text-white duration-200 rounded-md"
    >
      {children}
    </button>
  );
};

export default PrimaryButtonFull;
