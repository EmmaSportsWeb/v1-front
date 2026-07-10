import { useState } from 'react';

const INITIAL_FORM = {
  // Información general
  name: '',
  category: '',
  description: '',

  // Contacto
  email: '',
  phone: '',
  whatsapp: '',
  website: '',

  // Redes sociales
  facebook: '',
  instagram: '',
  tiktok: '',
  youtube: '',

  // Ubicación
  address: '',
  city: '',
  region: '',
  country: 'Chile',

  // Apariencia
  cover_color: '#10B981',

  // Imágenes
  logo: null,
  banner: null,
};

export default function useCrearEmprendimiento() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = ({ target }) => {
    const { name, files } = target;

    if (!files || !files.length) return;

    const file = files[0];

    setForm((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(file),
    }));
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
  };

  return {
    form,
    setForm,
    handleChange,
    handleImage,
    resetForm,
  };
}
