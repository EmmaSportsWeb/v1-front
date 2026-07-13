import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      const response = await login(form);

      const usuario = response.data.usuario;

      setSuccess(true);

      setTimeout(() => {
        if (usuario.role === 'Administrador') {
          navigate('/admin');
        } else {
          navigate('/app');
        }
      }, 1800);
    } catch (error) {
      console.error('Error login:', error.response?.data || error);

      setError(error.response?.data?.message || 'Credenciales incorrectas. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    error,
    loading,
    success,
    handleChange,
    handleSubmit,
  };
}
