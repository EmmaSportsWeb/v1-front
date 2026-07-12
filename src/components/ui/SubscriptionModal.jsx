import { Check, X } from 'lucide-react';

export default function SubscriptionModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl rounded-3xl bg-white p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5 rounded-full p-2 hover:bg-slate-100">
          <X />
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Mejora tu plan</h2>

          <p className="mt-3 text-slate-500">Has alcanzado el límite de tu plan gratuito.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* GRATIS */}

          <div className="rounded-3xl border p-6">
            <h3 className="text-xl font-bold">Gratis</h3>

            <p className="mt-2 text-3xl font-bold">$0</p>

            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex gap-2">
                <Check className="text-emerald-500" />1 emprendimiento
              </li>

              <li className="flex gap-2">
                <Check className="text-emerald-500" />
                Perfil público
              </li>

              <li className="flex gap-2">
                <Check className="text-emerald-500" />
                Productos básicos
              </li>
            </ul>
          </div>

          {/* PREMIUM */}

          <div className="rounded-3xl border-2 border-emerald-500 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-700">Premium</h3>

            <p className="mt-2 text-3xl font-bold">
              $4.990
              <span className="text-sm font-normal">/mes</span>
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-2">
                <Check className="text-emerald-600" />
                Emprendimientos ilimitados
              </li>

              <li className="flex gap-2">
                <Check className="text-emerald-600" />
                Estadísticas avanzadas
              </li>

              <li className="flex gap-2">
                <Check className="text-emerald-600" />
                Más visibilidad
              </li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500">Cambiar a Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
}
