const PriorityStatusCart = ({
  varient,
}: {
  varient: "low" | "medium" | "high";
}) => {
  return (
    <p
      className={`text-[11px] tracking-wide font-medium uppercase text-white px-[6px] py-[1px] rounded-[4px] ${
        varient === "low" && "bg-blue-700"
      } ${varient === "medium" && "bg-green-400"} ${
        varient === "high" && "bg-red-500"
      }`}
    >
      {varient === "low" && "Important"}
      {varient === "medium" && "Important"}
      {varient === "high" && "Most Important"}
    </p>
  );
};

export default PriorityStatusCart;
