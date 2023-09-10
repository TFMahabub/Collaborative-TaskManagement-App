// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const PrimaryInput = ({ ...attributes }: any) => {
  return (
    <input
      type="email"
      name=""
      id=""
      className="ring-0 focus:outline-none border-borderColor focus:border-primary min-w-[300px] px-2 py-[6px] text-base font-normal border rounded-md"
      {...attributes}
    />
  );
};

export default PrimaryInput;
