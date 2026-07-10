import { Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import useRegister from './hooks/useRegister';
import SuccessCard from '../../components/ui/SuccessCard';

export default function Register() {
  const {
    form,
    error,
    errors,
    loading,
    success,
    successMessage,
    handleChange,
    handleSubmit,
    inputClass,
  } = useRegister();

  /*
    Pantalla de éxito mientras crea la cuenta
  */
  if (success) {
    return (
      <SuccessCard
        title="¡Cuenta creada!"
        message={successMessage}
        loadingText="Iniciando sesión..."
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-2 sm:px-0">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:p-8">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 sm:h-14 sm:w-14">
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>

          <h1 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Crea tu cuenta en <span className="text-emerald-600">Emprende+</span>
          </h1>

          <p className="mt-3 max-w-xs text-center text-sm text-slate-500 sm:max-w-sm">
            Comienza a administrar tu emprendimiento de forma simple
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre</label>

            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              type="text"
              placeholder="Tu nombre"
              className={inputClass('nombre')}
            />

            {errors.nombre && <p className="mt-2 text-sm text-red-600">{errors.nombre[0]}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Correo electrónico
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="correo@ejemplo.com"
              className={inputClass('email')}
            />

            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email[0]}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Contraseña</label>

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              className={inputClass('password')}
            />

            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password[0]}</p>}
          </div>

          {/* Confirm password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Confirmar contraseña
            </label>

            <input
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              type="password"
              placeholder="Repite tu contraseña"
              className={inputClass('password_confirmation')}
            />

            {errors.password_confirmation && (
              <p className="mt-2 text-sm text-red-600">{errors.password_confirmation[0]}</p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          ¿Ya tienes una cuenta?{' '}
          <Link
            to="/auth/login"
            className="font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
