import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import FilterContext from "./contexts/FilteringContext";
import UsersContext from "./contexts/usersContext";
import "./index.css";
import router from "./routes/Index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersContext>
      <FilterContext>
        <RouterProvider router={router} />
      </FilterContext>
    </UsersContext>
  </React.StrictMode>
);
