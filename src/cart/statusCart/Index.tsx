const StatusCart = ({ varient }: { varient: "inProgress" | "complete" }) => {
  return (
    <p
      className={`text-[11px] tracking-wide font-medium uppercase text-white px-[6px] py-[1px] rounded-[4px] ${
        varient === "inProgress" && "bg-orange-500"
      } ${varient === "complete" && "bg-green-500"}`}
    >
      {varient === "inProgress" && "In Progress"}
      {varient === "complete" && "Complete"}
    </p>
  );
};

export default StatusCart;
