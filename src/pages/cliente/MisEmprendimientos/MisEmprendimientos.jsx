import EmprendedorService from './services/MisEmprendimietosService';

import useEmprendimientos from '../../cliente/Emprendimientos/hooks/useEmprendimientos';

import EmprendimientosList from '../../cliente/Emprendimientos/components/EmprendimientoList/EmprendimientosList';

export default function MisEmprendimientos() {
  const estado = useEmprendimientos(EmprendedorService.getMine);

  return <EmprendimientosList {...estado} titulo="Mis Emprendimientos" descripcion="Administra tus negocios registrados" emptyTitle="No tienes emprendimientos" emptyDescription="Crea tu primer negocio para comenzar" />;
}
