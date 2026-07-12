import EmprendedorService from '../../../../services/EmprendedorService';

import useEmprendimientos from '../../pages/hooks/useEmprendimientos';

import EmprendimientosList from '../../components/Emprendimientos/EmprendimientosList';

export default function MisEmprendimientos() {
  const estado = useEmprendimientos(EmprendedorService.getMine);

  return <EmprendimientosList {...estado} titulo="Mis Emprendimientos" descripcion="Administra tus negocios registrados" emptyTitle="No tienes emprendimientos" emptyDescription="Crea tu primer negocio para comenzar" />;
}
