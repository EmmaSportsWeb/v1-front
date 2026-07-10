import { Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import useLogin from './hooks/useLogin';
import SuccessCard from '../../components/ui/SuccessCard';

export default function Login() {
  const { form, error, loading, success, handleChange, handleSubmit } = useLogin();

  if (success) {
    return (
      <SuccessCard
        title="¡Bienvenido!"
        message="Tu sesión se inició correctamente."
        loadingText="Redirigiendo..."
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-2 sm:px-0">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:p-8">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 sm:h-14 sm:w-14">
            <Sparkles className="h-7 w-7" />
          </div>

          <h1 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Bienvenido a <span className="text-emerald-600">Emprende+</span>
          </h1>

          <p className="mt-3 text-center text-sm text-slate-500">
            Ingresa para administrar tu emprendimiento
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="correo@ejemplo.com"
            className="h-12 w-full rounded-xl border border-slate-200 px-4"
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="••••••••"
            className="h-12 w-full rounded-xl border border-slate-200 px-4"
          />

          <button
            disabled={loading}
            className="h-12 w-full rounded-xl bg-emerald-600 font-semibold text-white disabled:opacity-70"
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          ¿No tienes una cuenta?{' '}
          <Link to="/auth/register" className="font-semibold text-emerald-600">
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}
