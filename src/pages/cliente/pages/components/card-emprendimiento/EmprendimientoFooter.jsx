import { Clock } from 'lucide-react';

export default function EmprendimientoFooter({ emprendimiento }) {
  const { color, created_at_human } = emprendimiento;

  return (
    <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
      {/* 🕒 FECHA */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Clock size={14} className="opacity-70" />
        <span className="whitespace-nowrap">{created_at_human}</span>
      </div>

      {/* 🚀 CTA PRO */}
      <button
        style={{
          background: `linear-gradient(135deg, ${color || '#2563eb'}, ${color || '#2563eb'}cc)`,
        }}
        className="group relative overflow-hidden rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        {/* Glow interno */}
        <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 bg-white/20 blur-xl" />
        </span>

        {/* Texto */}
        <span className="relative z-10">Administrar</span>
      </button>
    </div>
  );
}
