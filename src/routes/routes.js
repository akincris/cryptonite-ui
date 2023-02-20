import { Navigate, useRoutes } from "react-router-dom";
import Base from "../layouts/Base/Base";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";

export function AppRoutes(props) {
  const routes = useRoutes([
    {
      path: "/",
      element: <Base toggleTheme={props.changeTheme}/>,
      children: [
        {
          path: "overview",
          element: <DashboardPage />,
        },
        {
          path: "",
          element: <Navigate to="overview" />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return routes;
}
