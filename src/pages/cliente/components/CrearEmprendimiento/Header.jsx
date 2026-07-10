import { Sparkles, Store, Palette, Globe, CheckCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden rounded-3xl sm:p-1">
      <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        {/* Contenido principal */}
        <div className="w-full max-w-3xl text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles size={15} />
            Nuevo emprendimiento
          </div>

          {/* Título */}
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200 sm:h-16 sm:w-16">
              <Store className="h-7 w-7 w-8 sm:h-8" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Crea tu emprendimiento
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-lg">
                Construye la identidad digital de tu negocio.
              </p>
            </div>
          </div>

          {/* Descripción */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:mx-0">
            Completa la información de tu emprendimiento, personaliza su apariencia y crea una
            página profesional para mostrar tus productos y servicios.
          </p>

          {/* Características */}
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap md:justify-start">
            {['🏪 Información del negocio', '🎨 Identidad visual', '🌎 Presencia online'].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-xl bg-white px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Card lateral */}
        <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-5 ring-1 ring-slate-100 sm:p-6 xl:max-w-sm">
          <h3 className="text-sm font-semibold text-slate-800">Tu emprendimiento incluirá</h3>

          <div className="mt-5 space-y-4">
            <Feature
              icon={<Store size={18} />}
              color="emerald"
              text="Perfil profesional del negocio"
            />

            <Feature icon={<Palette size={18} />} color="purple" text="Personalización visual" />

            <Feature icon={<Globe size={18} />} color="blue" text="Página pública online" />
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle size={18} />
            Listo para comenzar
          </div>
        </div>
      </div>
    </header>
  );
}

function Feature({ icon, color, text }) {
  const styles = {
    emerald: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-xl p-2 ${styles[color]}`}>{icon}</div>

      <span className="text-sm text-slate-600">{text}</span>
    </div>
  );
}
