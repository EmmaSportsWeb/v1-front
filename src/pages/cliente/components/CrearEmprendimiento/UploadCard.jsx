import { UploadCloud, Image as ImageIcon } from 'lucide-react';

export default function UploadCard({
  title,
  name,
  value,
  onChange,
  accept = 'image/*',
  helperText = 'PNG, JPG o WEBP',
}) {
  return (
    <label className="group block cursor-pointer">
      <input type="file" name={name} accept={accept} onChange={onChange} className="hidden" />

      <div className="overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 transition-all duration-200 group-hover:border-emerald-500 group-hover:shadow-lg">
        {value ? (
          <div className="relative h-52">
            <img src={value} alt={title} className="h-full w-full object-cover" />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
              <div className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 opacity-0 transition group-hover:opacity-100">
                Cambiar imagen
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-52 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <ImageIcon size={28} />
            </div>

            <h3 className="font-semibold text-slate-800">{title}</h3>

            <p className="mt-2 text-sm text-slate-500">Haz clic para subir una imagen</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
              <UploadCloud size={16} />
              Seleccionar archivo
            </div>

            <p className="mt-3 text-xs text-slate-400">{helperText}</p>
          </div>
        )}
      </div>
    </label>
  );
}
