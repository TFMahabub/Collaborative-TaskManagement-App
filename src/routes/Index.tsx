import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/Index";
import UserLoginPage from "../pages/login/Index";
import UserProfilePage from "../pages/profile/Index";
import UserRegistrationPage from "../pages/registration/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
    ],
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
]);

export default router;
