import EmprendimientoFooter from './EmprendimientoFooter';
import EmprendimientoHeader from './EmprendimientoHeader';
import EmprendimientoInfo from './EmprendimientoInfo';
import EmprendimientoSocial from './EmprendimientoSocial';

export default function EmprendimientoCard({ emprendimiento }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* HEADER */}
      <EmprendimientoHeader emprendimiento={emprendimiento} />

      {/* CONTENT PRO */}
      <div className="p-6">
        {/* 🔥 GRID CLAVE */}
        <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
          {/* IZQUIERDA */}
          <div className="flex flex-col justify-between gap-6">
            <EmprendimientoInfo emprendimiento={emprendimiento} />
            <EmprendimientoFooter emprendimiento={emprendimiento} />
          </div>
          {/* DERECHA (SOCIAL CARD) */}
          <div>
            <EmprendimientoSocial emprendimiento={emprendimiento} />
          </div>{' '}
        </div>
      </div>
    </article>
  );
}
