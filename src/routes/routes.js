import { Navigate, useRoutes } from "react-router-dom";
import Base from "../layouts/Base/Base";
import ErrorPage from "../pages/ErrorPage";

export function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "overview",
          element: <> base overview Page</>,
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
