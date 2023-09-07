import TaskCart from "../../cart/taskCart/Index";
import AsideMenus from "./Aside";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-2 container mt-sectionGap">
      <aside className="col-span-3 flex flex-col gap-4">
        <AsideMenus />
      </aside>
      <main className="col-span-9 flex flex-col gap-2">
        {[...Array(10)].map((_, i) => (
          <TaskCart key={i} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
