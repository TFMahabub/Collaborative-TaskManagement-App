import { twMerge } from "tailwind-merge";

const LargeText = ({
  children,
  extraClass,
}: {
  children: React.ReactNode;
  extraClass?: string;
}) => {
  return (
    <h1 className={twMerge("text-xl font-semibold", extraClass)}>{children}</h1>
  );
};

export default LargeText;
