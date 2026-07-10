import { Check } from 'lucide-react';

export default function SuccessCard({
  title = '¡Operación exitosa!',
  message = '',
  loadingText = 'Cargando...',
}) {
  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center px-2 sm:px-0">
      <div className="w-full rounded-3xl border border-emerald-100 bg-white/90 p-8 text-center shadow-xl shadow-emerald-100/50 backdrop-blur-xl">
        <div className="animate-in zoom-in mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>

        {message && <p className="mt-3 text-sm text-slate-500">{message}</p>}

        <div className="mt-6 flex items-center justify-center gap-3 text-sm font-medium text-emerald-600">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600" />
          {loadingText}
        </div>
      </div>
    </div>
  );
}
