import { Store, Package, ShoppingBag, TrendingUp, Plus, ArrowRight, Sparkles } from 'lucide-react';

export default function HomeCliente() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Hero */}
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
                Administra tu emprendimiento, controla tus productos y haz crecer tu negocio desde
                un solo lugar.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50">
              <Plus size={18} />
              Nuevo emprendimiento
            </button>
          </div>
        </section>

        {/* Métricas */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={<Store />}
            title="Emprendimientos"
            value="2"
            description="Activos actualmente"
          />

          <MetricCard icon={<Package />} title="Productos" value="24" description="Publicados" />

          <MetricCard icon={<ShoppingBag />} title="Ventas" value="128" description="Este mes" />

          <MetricCard
            icon={<TrendingUp />}
            title="Crecimiento"
            value="+18%"
            description="Últimos 30 días"
          />
        </section>

        {/* Acciones rápidas */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Acciones rápidas</h2>

          <div className="grid gap-5 md:grid-cols-3">
            <ActionCard
              icon={<Store />}
              title="Crear emprendimiento"
              description="Agrega un nuevo negocio a tu perfil."
            />

            <ActionCard
              icon={<Package />}
              title="Agregar producto"
              description="Publica nuevos productos o servicios."
            />

            <ActionCard
              icon={<ShoppingBag />}
              title="Ver marketplace"
              description="Mira cómo ven tus clientes tu negocio."
            />
          </div>
        </section>

        {/* Estado */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Tu emprendimiento está creciendo 🚀
              </h3>

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
      </div>
    </div>
  );
}

function MetricCard({ icon, title, value, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-1 text-3xl font-bold text-slate-900">{value}</h3>

      <p className="mt-2 text-xs text-slate-400">{description}</p>
    </div>
  );
}

function ActionCard({ icon, title, description }) {
  return (
    <button className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-emerald-600 transition group-hover:bg-emerald-100">
        {icon}
      </div>

      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </button>
  );
}
