import { MapPin, Phone, Mail, Globe, BadgeCheck } from 'lucide-react';
import EmprendimientoSocial from './EmprendimientoSocial';

export default function EmprendimientoInfo({ emprendimiento }) {
  const { nombre, categoria, descripcion, verificado, ciudad, region, direccion, telefono, email, sitio_web } = emprendimiento;

  return (
    <div className="-mt-8 space-y-5">
      {/* Nombre */}
      <div className="space-y-1 text-center">
        <div className="flex items-center justify-center gap-2">
          <h2 className="truncate text-xl font-semibold tracking-tight text-slate-900">{nombre}</h2>

          {verificado && <BadgeCheck className="text-blue-500" size={18} />}
        </div>

        {categoria && <p className="truncate text-sm text-slate-500">{categoria}</p>}
      </div>

      {/* Descripción */}
      {descripcion && <p className="line-clamp-3 text-center text-sm leading-relaxed text-slate-600">{descripcion}</p>}

      {/* Ubicación */}
      {(ciudad || region || direccion) && (
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <MapPin size={16} className="mt-0.5 text-slate-400" />

          <div>
            {(ciudad || region) && <p>{[ciudad, region].filter(Boolean).join(', ')}</p>}

            {direccion && <p className="text-slate-500">{direccion}</p>}
          </div>
        </div>
      )}

      {/* Contacto + Redes */}
      <div className="flex items-start justify-between gap-4">
        {/* Contacto */}
        <div className="space-y-2 text-sm text-slate-600">
          {telefono && (
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-slate-400" />
              <span>{telefono}</span>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-slate-400" />
              <span className="truncate">{email}</span>
            </div>
          )}

          {sitio_web && (
            <div className="flex items-center gap-3">
              <Globe size={16} className="text-slate-400" />
              <a href={sitio_web} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Sitio web
              </a>
            </div>
          )}
        </div>

        {/* Redes */}
        <EmprendimientoSocial emprendimiento={emprendimiento} />
      </div>
    </div>
  );
}
