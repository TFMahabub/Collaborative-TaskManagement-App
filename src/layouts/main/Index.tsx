import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Index";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
