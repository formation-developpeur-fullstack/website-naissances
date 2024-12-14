import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import PrivateLayout from "@/layouts/PrivateLayout";
import Declarations from "@/pages/declarations/Declarations";
import Home from "@/pages/Home";
import DeclarationEdit from "@/pages/declarations/DeclarationEdit";
import Requests from "@/pages/requests/Requests";
import RequestEdit from "@/pages/requests/RequestEdit";
import PublicLayout from "@/layouts/PublicLayout";
import Login from "@/pages/account/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"/connexion"} />,
          },
          {
            path: "/connexion",
            element: <Login />,
          },
        ],
      },
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"/private/declarations"} />,
          },
          {
            path: "declarations",
            element: <Declarations />,
          },
          {
            path: "declarations/nouvelle-declaration",
            element: <DeclarationEdit />,
          },
          {
            path: "demandes",
            element: <Requests />,
          },
          {
            path: "demandes/nouvelle-demande",
            element: <RequestEdit />,
          },
        ],
      },
    ],
  },
]);

export { router };
