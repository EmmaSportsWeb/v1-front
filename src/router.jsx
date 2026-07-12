import { createBrowserRouter } from 'react-router-dom';

import PublicLayout from './layouts/pubic/PublicLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import ClienteLayout from './layouts/cliente/ClienteLayout';

import Home from './pages/public/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomeCliente from './pages/cliente/HomeCliente';
import CrearEmprendimiento from './pages/cliente/pages/CrearEmprendimiento/CrearEmprendimiento';
import MisEmprendimientos from './pages/cliente/pages/MisEmprendimientos/MisEmprendimientos';
import Emprendimientos from './pages/cliente/pages/Emprendimientos/Emprendimientos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },

  {
    path: '/app',
    element: <ClienteLayout />,
    children: [
      {
        index: true,
        element: <HomeCliente />,
      },
      {
        path: 'crear-emprendimiento',
        element: <CrearEmprendimiento />,
      },
      {
        path: 'mis-emprendimientos',
        element: <MisEmprendimientos />,
      },
      {
        path: 'emprendimientos',
        element: <Emprendimientos />,
      },
    ],
  },
]);

export default router;
