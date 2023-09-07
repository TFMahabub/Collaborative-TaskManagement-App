import PriorityStatusCart from "../priorityStatusCart/Index";
import StatusCart from "../statusCart/Index";

const TaskCart = () => {
  return (
    <div className="border border-borderColor p-4 rounded-md flex flex-col gap-4">
      <h2 className="text-textColor text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque optio
        corporis eum, cum error reiciendis.
      </h2>
      <p className="text-textColor/70">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        officiis vero incidunt harum aspernatur architecto illum laudantium odio
        earum, quo dolorem repudiandae, voluptas, minus fugit tempora ex.
        Quisquam exercitationem distinctio aspernatur placeat pariatur natus,
        necessitatibus corporis quis sint quasi officia?
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-textColor/70">Due Date: 12/12/2023</p>
        <PriorityStatusCart varient="low" />
        <StatusCart varient="complete" />
      </div>
    </div>
  );
};

export default TaskCart;
