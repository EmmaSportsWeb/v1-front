import emprendimientoService from '../../../../services/emprendimientoService';

import useEmprendimientos from '../../pages/hooks/useEmprendimientos';

import EmprendimientosList from '../../components/Emprendimientos/EmprendimientosList';

export default function Emprendimientos() {
  const estado = useEmprendimientos(emprendimientoService.getAll);

  return <EmprendimientosList {...estado} titulo="Explorar Emprendimientos" descripcion="Descubre negocios registrados en la plataforma" emptyTitle="No hay emprendimientos" emptyDescription="Vuelve más tarde." />;
}
