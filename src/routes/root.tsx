import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import PrivateLayout from "../layouts/PrivateLayout";
import Declarations from "../pages/Declarations";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            path: "declarations",
            element: <Declarations />,
          },
        ],
      },
    ],
  },
]);

export { router };
