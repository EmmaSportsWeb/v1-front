import { useEffect, useMemo, useState } from 'react';

export default function useEmprendimientos(loader) {
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarEmprendimientos();
  }, []);

  async function cargarEmprendimientos() {
    try {
      setLoading(true);

      const response = await loader();

      setEmprendimientos(response.data.data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filtrados = useMemo(() => {
    const texto = busqueda.toLowerCase();

    return emprendimientos.filter((item) => {
      return item.nombre?.toLowerCase().includes(texto) || item.categoria?.toLowerCase().includes(texto) || item.ciudad?.toLowerCase().includes(texto);
    });
  }, [emprendimientos, busqueda]);

  return {
    filtrados,
    loading,
    busqueda,
    setBusqueda,
    recargar: cargarEmprendimientos,
  };
}
