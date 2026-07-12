import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

export default function EmprendimientoSocial({ emprendimiento }) {
  const { redes } = emprendimiento;

  const socialItems = [
    { key: 'facebook', url: redes?.facebook, icon: <FaFacebookF /> },
    { key: 'instagram', url: redes?.instagram, icon: <FaInstagram /> },
    { key: 'tiktok', url: redes?.tiktok, icon: <FaTiktok /> },
    { key: 'youtube', url: redes?.youtube, icon: <FaYoutube /> },
  ];

  const available = socialItems.filter((s) => s.url);

  if (!available.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Título */}
      <div className="mb-4 text-sm font-semibold text-slate-700">Conéctanos</div>

      {/* Divider */}
      <div className="mb-4 h-px w-full bg-slate-100" />

      {/* Iconos */}
      <div className="flex items-center justify-between gap-3">
        {available.map((social) => (
          <a
            key={social.key}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span className="text-lg transition group-hover:scale-110">{social.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
