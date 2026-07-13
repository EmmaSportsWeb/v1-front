import { createContext, useContext, useEffect, useState } from 'react';

import authService from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(localStorage.getItem('token'));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);

        return;
      }

      try {
        const response = await authService.me();

        setUser(response.data ?? response);
      } catch (error) {
        console.error('Error cargando usuario:', error);

        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  const register = async (data) => {
    const response = await authService.register(data);

    const { token, usuario } = response.data;

    localStorage.setItem('token', token);

    setToken(token);

    setUser(usuario);

    return response;
  };

  const login = async (data) => {
    const response = await authService.login(data);

    const { token, usuario } = response.data;

    localStorage.setItem('token', token);

    setToken(token);

    setUser(usuario);

    return response;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log('Error cerrando sesión:', error);
    }

    localStorage.removeItem('token');

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
