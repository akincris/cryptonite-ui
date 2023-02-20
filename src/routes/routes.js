import { Navigate, useRoutes } from "react-router-dom";
import Base from "../layouts/Base/Base";
import ErrorPage from "../pages/ErrorPage";

export function AppRoutes(props) {
  const routes = useRoutes([
    {
      path: "/",
      element: <Base toggleTheme={props.changeTheme}/>,
      children: [
        {
          path: "overview",
          element: <div> base overview Page</div>,
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
