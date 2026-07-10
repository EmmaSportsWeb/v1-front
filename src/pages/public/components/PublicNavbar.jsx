import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 shadow-lg shadow-slate-200/40 backdrop-blur-xl">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition group-hover:scale-105">
              <Sparkles size={22} />
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Emprende
              <span className="text-emerald-600">+</span>
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/emprendimientos"
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
            >
              Emprendimientos
            </Link>

            <Link
              to="/auth/login"
              className="flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Acceder
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="space-y-2">
              <Link
                onClick={closeMenu}
                to="/emprendimientos"
                className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-emerald-600"
              >
                Emprendimientos
              </Link>

              <div className="pt-3">
                <Link
                  onClick={closeMenu}
                  to="/auth/login"
                  className="flex h-12 items-center justify-center rounded-xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Comenzar ahora
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
