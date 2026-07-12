export default function EmprendimientoHeader({ emprendimiento }) {
  const { nombre, logo_url, banner_url, color, activo } = emprendimiento;

  return (
    <div className="relative">
      {/* 🔵 BANNER */}
      <div className="relative h-40 overflow-hidden">
        {banner_url ? (
          <img src={banner_url} alt={nombre} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${color}, ${color}cc)`,
            }}
          />
        )}

        {/* Overlay PRO */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />

        {/* Glow decorativo */}
        <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        {/* STATUS */}
        <div
          className={`absolute top-5 right-5 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${
            activo ? 'bg-emerald-100/90 text-emerald-700' : 'bg-red-100/90 text-red-700'
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          {activo ? 'Activo' : 'Inactivo'}
        </div>
      </div>

      {/* 🟦 LOGO FLOATING CARD */}
      <div className="px-6">
        <div className="-mt-12 flex items-end gap-4">
          <div className="group/logo relative">
            {logo_url ? (
              <img src={logo_url} alt={nombre} className="h-24 w-24 rounded-2xl bg-white object-cover shadow-xl ring-4 ring-white transition group-hover/logo:scale-105" />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-xl ring-4 ring-white" style={{ backgroundColor: color }}>
                {nombre?.charAt(0)}
              </div>
            )}

            {/* Glow del logo */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-black/20 opacity-40 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
