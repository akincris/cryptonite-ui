import { Navigate, useRoutes } from "react-router-dom";
import Base from "../layouts/Base/Base";
import AccountPage from "../pages/AccountPage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import WatchListPage from "../pages/WatchlistPage";

export function AppRoutes(props) {
  const routes = useRoutes([
    {
      path: "/",
      element: <Base toggleTheme={props.changeTheme} />,
      children: [
        {
          path: "overview",
          element: <DashboardPage />,
        },
        {
          path: "watchList",
          element: <WatchListPage />,
        },
        {
          path: "account",
          element: <AccountPage />,
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
