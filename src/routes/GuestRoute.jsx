import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Cargando sesión...</div>;
  }

  if (user) {
    return <Navigate to="/app" replace />;
  }

  return children;
}
