import { ArrowRight } from 'lucide-react';

export default function GrowthStatus() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Tu emprendimiento está creciendo 🚀</h3>

          <p className="mt-1 text-sm text-slate-500">
            Completa tu perfil para mejorar tu presencia en Emprende+.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          Completar perfil
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
