import api from '../services/api';

const EmprendedorService = {
  /**
   * Emprendimientos del usuario autenticado
   */
  getMine() {
    return api.get('/emprendimientos/misEmprendimientos');
  },

  /**
   * Emprendimiento activo actual
   */
  current() {
    return api.get('/emprendimientos/current');
  },

  /**
   * Cambiar emprendimiento activo
   */
  switch(id) {
    return api.post(`/emprendimientos/${id}/switch`);
  },

  /**
   * Crear emprendimiento
   */
  create(data) {
    return api.post('/emprendimientos', data);
  },
};

export default EmprendedorService;
