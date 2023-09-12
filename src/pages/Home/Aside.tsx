import { useContext } from "react";
import { FilterProvider } from "../../contexts/FilteringContext";

export const LASTDAYS = "last-days";
const LAST7DAYS = "last-7-days";
const LAST14DAYS = "last-14-days";

const AsideMenus = () => {
  const { filter, setFilter } = useContext(FilterProvider);

  // console.log(filter);
  // const dueDateRef = useRef();
  // const priorityRef = useRef();
  // const taskStatusRef = useRef();

  return (
    <>
      <h2 className="text-textColor text-xl font-semibold">Filter By</h2>
      <div className="flex items-center justify-between">
        <p className="text-textColor/70 font-medium">Due Date</p>
        <select
          name=""
          id=""
          value={filter?.dueDate}
          onChange={(e) => setFilter({ ...filter, dueDate: e.target.value })}
          className="border-borderColor focus:outline-none ring-0 p-1 border rounded-sm"
        >
          <option value={LASTDAYS}>last days</option>
          <option value={LAST7DAYS}>last 7 days</option>
          <option value={LAST14DAYS}>last 14 days</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-textColor/70 font-medium">Priority</p>
        <select
          name=""
          id=""
          value={filter?.priority}
          onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
          className="border-borderColor focus:outline-none ring-0 p-1 border rounded-sm"
        >
          <option value={LASTDAYS}>last days</option>
          <option value={LAST7DAYS}>last 7 days</option>
          <option value={LAST14DAYS}>last 14 days</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-textColor/70 font-medium">Task Status</p>
        <select
          name=""
          id=""
          value={filter?.taskStatus}
          onChange={(e) => setFilter({ ...filter, taskStatus: e.target.value })}
          className="border-borderColor focus:outline-none ring-0 p-1 border rounded-sm"
        >
          <option value={LASTDAYS}>last days</option>
          <option value={LAST7DAYS}>last 7 days</option>
          <option value={LAST14DAYS}>last 14 days</option>
        </select>
      </div>
    </>
  );
};

export default AsideMenus;
