import { Plus, Sparkles } from 'lucide-react';

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-6 text-white shadow-xl sm:p-10">
      <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2 text-emerald-100">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Bienvenido a Emprende+</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hola, Emmanuel 👋</h1>

          <p className="mt-3 max-w-xl text-sm text-emerald-50 sm:text-base">
            Administra tu emprendimiento, controla tus productos y haz crecer tu negocio desde un
            solo lugar.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50">
          <Plus size={18} />
          Nuevo emprendimiento
        </button>
      </div>
    </section>
  );
}
