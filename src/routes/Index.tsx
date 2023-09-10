import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/Index";
import HomePage from "../pages/home/Index";
import UserLoginPage from "../pages/login/Index";
import UserProfilePage from "../pages/profile/Index";
import SignUpPage from "../pages/signUp/Index";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/sign_up",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <UserLoginPage />,
      },
      {
        path: "/user_profile",
        element: (
          <UserProfilePage />
          // <PrivateRoute>
          //   <UserProfilePage />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
