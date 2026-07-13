import { Search } from 'lucide-react';

import EmprendimientoCard from '../CardEmprendimiento/EmprendimientoCard';

export default function EmprendimientosList({ titulo, descripcion, emptyTitle, emptyDescription, filtrados, loading, busqueda, setBusqueda }) {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{titulo}</h1>

          <p className="text-sm text-slate-500">{descripcion}</p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" size={18} />

          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-slate-100"
          />
        </div>
      </header>

      {loading && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-60 animate-pulse rounded-2xl bg-white p-5" />
          ))}
        </div>
      )}

      {!loading && filtrados.length === 0 && (
        <div className="rounded-3xl border border-dashed p-20 text-center">
          <h2 className="font-semibold">{emptyTitle}</h2>

          <p className="text-sm text-slate-500">{emptyDescription}</p>
        </div>
      )}

      {!loading && filtrados.length > 0 && (
        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {filtrados.map((item) => (
            <EmprendimientoCard key={item.id} emprendimiento={item} />
          ))}
        </section>
      )}
    </div>
  );
}
