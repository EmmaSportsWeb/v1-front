import { MapPin, Phone, Mail, Globe, BadgeCheck } from 'lucide-react';

export default function EmprendimientoInfo({ emprendimiento }) {
  const { nombre, categoria, descripcion, color, verificado, ubicacion, direccion, telefono, email, sitio_web } = emprendimiento;

  return (
    <div className="space-y-5">
      {/* 🧠 HEADER INFO */}
      <div className="space-y-2">
        {/* Nombre + verificado */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">{nombre}</h2>

          {verificado && <BadgeCheck className="text-blue-500" size={18} />}
        </div>

        {/* Categoría */}
        {categoria && (
          <span
            className="inline-flex rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${color}, ${color}cc)`,
            }}
          >
            {categoria}
          </span>
        )}
      </div>

      {/* 📝 DESCRIPCIÓN */}
      {descripcion && <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">{descripcion}</p>}

      {/* 📍 INFO CONTACTO (REDISEÑO) */}
      <div className="space-y-3 text-sm">
        {ubicacion && (
          <div className="flex items-start gap-3 text-slate-600">
            <MapPin size={16} className="mt-0.5 text-slate-400" />
            <span className="leading-snug">
              {ubicacion}
              {direccion && ` · ${direccion}`}
            </span>
          </div>
        )}

        {telefono && (
          <div className="flex items-center gap-3 text-slate-600">
            <Phone size={16} className="text-slate-400" />
            <span>{telefono}</span>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-3 text-slate-600">
            <Mail size={16} className="text-slate-400" />
            <span className="truncate">{email}</span>
          </div>
        )}

        {sitio_web && (
          <div className="flex items-center gap-3 text-slate-600">
            <Globe size={16} className="text-slate-400" />
            <span className="truncate">{sitio_web}</span>
          </div>
        )}
      </div>
    </div>
  );
}
