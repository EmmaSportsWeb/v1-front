import { Upload, ImageIcon } from 'lucide-react';

export default function UploadCard({ title, name, value, error, onChange }) {
  const message = Array.isArray(error) ? error[0] : error;

  const hasError = Boolean(message);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className={`group relative flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-200 ${
          hasError ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50'
        } `}
      >
        {value ? (
          <img src={value} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <div className={`rounded-full p-3 ${hasError ? 'bg-red-100 text-red-500' : 'bg-slate-100 text-slate-400'} `}>{value ? <ImageIcon size={24} /> : <Upload size={24} />}</div>

            <div className="text-center">
              <p className="font-medium text-slate-700">Subir {title}</p>

              <p className="text-sm text-slate-400">JPG, PNG, WEBP o AVIF</p>
            </div>
          </div>
        )}

        {value && <div className="absolute inset-x-0 bottom-0 bg-black/50 px-4 py-2 text-center text-sm text-white opacity-0 transition group-hover:opacity-100">Cambiar {title}</div>}

        <input id={name} name={name} type="file" accept="image/*" onChange={onChange} className="hidden" />
      </label>

      {message && <p className="text-sm font-medium text-red-600">{message}</p>}
    </div>
  );
}
