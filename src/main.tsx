import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UsersContext from "./contexts/usersContext";
import "./index.css";
import router from "./routes/Index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersContext>
      <RouterProvider router={router} />
    </UsersContext>
  </React.StrictMode>
);
