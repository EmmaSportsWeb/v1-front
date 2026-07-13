import { ArrowRight } from 'lucide-react';

export default function EmprendimientoFooter({ emprendimiento }) {
  const { color } = emprendimiento;

  return (
    <div className="flex items-center justify-end border-t border-slate-100 pt-4">
      <button
        className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-80"
        style={{
          backgroundColor: `${color}20`,
          color: color || '#0f172a',
        }}
      >
        Ver emprendimiento
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
