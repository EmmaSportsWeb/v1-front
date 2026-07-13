import api from '../../../../services/api';

const emprendimientoService = {
  getAll() {
    return api.get('/emprendimientos');
  },
};

export default emprendimientoService;
