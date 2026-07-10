export default function MetricCard({ icon, title, value, description }) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-1 text-3xl font-bold text-slate-900">{value}</h3>

      <p className="mt-2 text-xs text-slate-400">{description}</p>
    </div>
  );
}
