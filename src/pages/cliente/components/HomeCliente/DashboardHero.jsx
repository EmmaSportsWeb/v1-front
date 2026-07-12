import { Sparkles, Rocket, Store } from 'lucide-react';

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-6 text-white shadow-xl sm:p-8">
      {/* Decoración */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-teal-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Texto principal */}
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
              <Sparkles size={20} />
            </div>

            <span className="text-sm font-medium text-emerald-100">Bienvenido a Emprende+</span>
          </div>

          <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Todo lo que necesitas para hacer crecer tu negocio.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50 sm:text-base">
            Administra tus emprendimientos, organiza tus productos y conecta con más clientes desde
            un solo lugar.
          </p>
        </div>

        {/* Mensaje secundario */}
        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur md:max-w-xs">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600">
            <Store size={24} />
          </div>

          <div>
            <p className="text-sm font-semibold">Tu negocio, tu espacio</p>

            <p className="mt-1 text-xs leading-5 text-emerald-100">
              Construye una presencia digital profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
