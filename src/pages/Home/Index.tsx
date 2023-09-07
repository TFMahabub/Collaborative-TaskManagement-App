import TaskCart from "../../cart/taskCart/Index";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-2 container">
      <aside className="bg-green-500 col-span-3">aside</aside>
      <main className="col-span-9 flex flex-col gap-2">
        {[...Array(10)].map((_, i) => (
          <TaskCart key={i} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
