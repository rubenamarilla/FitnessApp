import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import StartPage from "../pages/StartPage";
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage";
import NavHeader from "../layouts/NavHeader";
import Inicio from "../pages/Inicio";
import Historial from "../pages/Historial";
import Perfil from "../pages/Perfil";
import Actividad from "../pages/Actividad";
import EditarHistorial from "../pages/EditarHistorial";
import EditarPerfil from "../pages/EditarPerfil";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import Datos from "../pages/Datos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <PublicRouter><RegisterPage /></PublicRouter>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro/datos",
    element: <PrivateRouter><Datos /></PrivateRouter>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <PublicRouter><LoginPage /></PublicRouter>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio/",
    element: <PrivateRouter><NavHeader /></PrivateRouter> ,
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
      {
        path: "/inicio/perfil/editar",
        element: <EditarPerfil />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inicio/actividad",
        element: <Actividad />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inicio/historial/edit/:id",
        element: <EditarHistorial />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;