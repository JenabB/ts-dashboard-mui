import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";

import DashboardApp from "./pages/DashboardApp";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        // { path: "user", element: <User /> },
        // { path: "products", element: <Products /> },
        // { path: "blog", element: <Blog /> },
      ],
    },
  ]);
}
