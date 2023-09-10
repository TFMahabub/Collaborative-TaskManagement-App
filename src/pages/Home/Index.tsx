import TaskCart from "../../cart/taskCart/Index";
import AsideMenus from "./Aside";

const HomePage = () => {
  return (
    <div className="mt-sectionGap container grid grid-cols-12 gap-2">
      <aside className="flex flex-col col-span-3 gap-4">
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
