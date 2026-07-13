import { Store, Mail, Phone, Globe, MapPin, Tag } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

export default function PreviewCard({ form }) {
  return (
    <div className="sticky top-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      {/* Banner */}
      <div className="relative h-44" style={{ background: form.color }}>
        {form.banner_preview && <img src={form.banner_preview} alt="Banner" className="h-full w-full object-cover" />}
      </div>

      <div className="relative px-6 pb-6">
        {/* Logo */}
        <div className="-mt-14 flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-lg">
          {form.logo_preview ? <img src={form.logo_preview} alt="Logo" className="h-full w-full object-cover" /> : <Store size={42} className="text-slate-400" />}
        </div>

        {/* Nombre */}
        <h2 className="mt-5 text-2xl font-bold text-slate-900">{form.nombre || 'Nombre del emprendimiento'}</h2>

        {/* Categoría */}
        {form.categoria && (
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <Tag size={14} />
            {form.categoria}
          </div>
        )}

        {/* Descripción */}
        <p className="mt-5 leading-relaxed text-slate-600">{form.descripcion || 'Aquí aparecerá la descripción de tu emprendimiento. Cuéntales a tus clientes qué haces y qué te hace diferente.'}</p>

        {/* Contacto */}
        <div className="mt-8 space-y-3">
          {form.email && <Item icon={<Mail size={17} />} text={form.email} />}

          {form.telefono && <Item icon={<Phone size={17} />} text={form.telefono} />}

          {form.sitio_web && <Item icon={<Globe size={17} />} text={form.sitio_web} />}

          {(form.direccion || form.ciudad || form.region || form.pais) && <Item icon={<MapPin size={17} />} text={[form.direccion, form.ciudad, form.region, form.pais].filter(Boolean).join(', ')} />}
        </div>

        {/* Redes */}
        {(form.facebook || form.instagram || form.tiktok || form.youtube || form.whatsapp) && (
          <>
            <div className="my-6 border-t border-slate-200" />

            <div className="flex flex-wrap gap-3">
              {form.facebook && <Social icon={<FaFacebook />} />}

              {form.instagram && <Social icon={<FaInstagram />} />}

              {form.tiktok && <Social icon={<FaTiktok />} />}

              {form.youtube && <Social icon={<FaYoutube />} />}

              {form.whatsapp && <Social icon={<FaWhatsapp />} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-600">
      <div className="text-emerald-600">{icon}</div>

      <span>{text}</span>
    </div>
  );
}

function Social({ icon }) {
  return (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
    >
      {icon}
    </button>
  );
}
