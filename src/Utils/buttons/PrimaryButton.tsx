import React from "react";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...attributs }: PropsType) => {
  return (
    <button
      {...attributs}
      className="px-3 py-[3px] bg-primary text-white rounded-md active:scale-105 duration-200"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
