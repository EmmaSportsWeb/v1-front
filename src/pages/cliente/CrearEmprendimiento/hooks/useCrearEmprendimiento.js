import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EmprendedorService from '../../MisEmprendimientos/services/MisEmprendimietosService';
import { useAuth } from '../../../../context/AuthContext';

export default function useCrearEmprendimiento({ setShowSubscription }) {
  const navigate = useNavigate();

  const { getPerfil } = useAuth(); // 🔥 obtener función para refrescar usuario

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',

    logo: null,
    logo_preview: null,

    banner: null,
    banner_preview: null,

    email: '',
    telefono: '',
    whatsapp: '',

    sitio_web: '',

    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',

    direccion: '',
    ciudad: '',
    region: '',
    pais: 'Chile',

    color: '#16a34a',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleImage = (e) => {
    const { name, files } = e.target;

    if (!files?.length) return;

    const file = files[0];
    const preview = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      [name]: file,
      [`${name}_preview`]: preview,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async () => {
    try {
      setErrors({});
      setMessage(null);

      const data = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === 'logo_preview' || key === 'banner_preview') return;

        if (value !== null && value !== '') {
          data.append(key, value);
        }
      });

      const response = await EmprendedorService.create(data);

      console.log('Respuesta emprendimiento:', response.data);

      // 🔥 SOLUCIÓN: refrescar usuario después de crear
      await getPerfil();

      // opcional: mensaje UX
      setMessage('Emprendimiento creado correctamente');

      navigate('/app/emprendimientos');
    } catch (error) {
      console.error('Error creando emprendimiento:', error.response?.data || error);

      /*
      |----------------------------------------------------------------------
      | Límite alcanzado
      |----------------------------------------------------------------------
      */
      if (error.response?.status === 403 && error.response?.data?.data?.limit_reached) {
        setShowSubscription(true);
        return;
      }

      /*
      |----------------------------------------------------------------------
      | Validaciones Laravel
      |----------------------------------------------------------------------
      */
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
        return;
      }
    }
  };

  return {
    form,
    errors,
    message,
    handleChange,
    handleImage,
    handleSubmit,
  };
}
