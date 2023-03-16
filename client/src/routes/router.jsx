import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import StartPage from "../pages/StartPage";
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage";
import NavHeader from "../layouts/NavHeader";
import Inicio from "../pages/Inicio";
import Historial from "../pages/Historial";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio/",
    element: <NavHeader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/inicio/",
        element: <Inicio />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inicio/historial",
        element: <Historial />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inicio/perfil",
        element: <Perfil />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;