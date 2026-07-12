import api from './api';

const emprendimientoService = {
  getAll() {
    return api.get('/emprendimientos');
  },
};

export default emprendimientoService;
