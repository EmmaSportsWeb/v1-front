import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function useRegister() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setErrors({});
    setLoading(true);

    try {
      const response = await register(form);

      console.log('Respuesta registro:', response);

      setSuccessMessage(response?.message || 'Usuario registrado correctamente.');

      setSuccess(true);

      setTimeout(() => {
        navigate('/app');
      }, 1800);
    } catch (error) {
      console.error('Error registro:', error.response?.data || error);

      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setError(error.response?.data?.message || 'Ocurrió un error al crear la cuenta');
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `h-12 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 sm:text-base ${
      errors[field]
        ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
        : 'border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10'
    }`;

  return {
    form,
    error,
    errors,
    loading,
    success,
    successMessage,
    handleChange,
    handleSubmit,
    inputClass,
  };
}
