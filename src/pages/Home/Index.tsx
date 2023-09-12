import { useContext } from "react";
import TaskCart from "../../cart/taskCart/Index";
import { FilterProvider } from "../../contexts/FilteringContext";
import AsideMenus from "./Aside";

const HomePage = () => {
  const { filter, setFilter } = useContext(FilterProvider);
  return (
    <div className="mt-sectionGap container grid grid-cols-12 gap-10">
      <aside className="border-borderColor flex flex-col h-full col-span-3 gap-4 p-4 bg-white border rounded-md">
        <AsideMenus />
      </aside>
      <main className="flex flex-col col-span-9 gap-2">
        {[...Array(10)].map((_, i) => (
          <TaskCart key={i} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
