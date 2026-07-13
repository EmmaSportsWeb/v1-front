import { createBrowserRouter } from 'react-router-dom';

import PublicLayout from './layouts/pubic/PublicLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import ClienteLayout from './layouts/cliente/ClienteLayout';

import ProtectedRoute from './routes/ProtectedRoute';

import Home from './pages/public/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import HomeCliente from './pages/cliente/HomeCliente/HomeCliente';
import CrearEmprendimiento from './pages/cliente/CrearEmprendimiento/CrearEmprendimiento';
import MisEmprendimientos from './pages/cliente/MisEmprendimientos/MisEmprendimientos';
import Emprendimientos from './pages/cliente/Emprendimientos/Emprendimientos';
import GuestRoute from './routes/GuestRoute';

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
    element: (
      <GuestRoute>
        <AuthLayout />
      </GuestRoute>
    ),
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
    element: (
      <ProtectedRoute>
        <ClienteLayout />
      </ProtectedRoute>
    ),
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
