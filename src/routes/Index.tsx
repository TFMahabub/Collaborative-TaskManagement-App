import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/Index";
import HomePage from "../pages/home/Index";
import UserLoginPage from "../pages/login/Index";
import UserProfilePage from "../pages/profile/Index";
import UserRegistrationPage from "../pages/registration/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/registration",
        element: <UserRegistrationPage />,
      },
      {
        path: "/login",
        element: <UserLoginPage />,
      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
    ],
  },
]);

export default router;
