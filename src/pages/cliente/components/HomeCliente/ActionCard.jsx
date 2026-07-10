import { Link } from 'react-router-dom';

export default function ActionCard({ icon, title, description, to }) {
  return (
    <Link
      to={to}
      className="group block flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-emerald-600 transition group-hover:bg-emerald-100">
        {icon}
      </div>

      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </Link>
  );
}
