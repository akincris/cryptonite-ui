import { Navigate, useRoutes } from "react-router-dom";
import Auth from "../layouts/Auth";
import Base from "../layouts/Base/Base";
import AccountPage from "../pages/AccountPage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import LandingPage from "../pages/LandingPage";
import WatchListPage from "../pages/WatchlistPage";
import WorldTopPage from "../pages/WorldTopPage";

export function AppRoutes(props) {
  const routes = useRoutes([
    {
      path: "/auth",
      element: <Auth toggleTheme={props.changeTheme} />,
      children: [
        {
          path: "overview",
          element: <LandingPage />,
        },
        {
          path: "",
          element: <Navigate to="overview" />,
        },
      ],
    },
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
          path: "worldTop",
          element: <WorldTopPage />,
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
