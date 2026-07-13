import EmprendimientoFooter from './EmprendimientoFooter';
import EmprendimientoHeader from './EmprendimientoHeader';
import EmprendimientoInfo from './EmprendimientoInfo';
import EmprendimientoSocial from './EmprendimientoSocial';

export default function EmprendimientoCard({ emprendimiento }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* 🔝 Header */}
      <EmprendimientoHeader emprendimiento={emprendimiento} />

      {/* 📦 Contenido */}
      <div className="flex flex-1 flex-col px-6 pb-6">
        <div className="flex-1">
          <EmprendimientoInfo emprendimiento={emprendimiento} />
        </div>

        <div className="pt-4">
          <EmprendimientoFooter emprendimiento={emprendimiento} />
        </div>
      </div>
    </article>
  );
}
