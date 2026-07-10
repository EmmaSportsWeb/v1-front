import {
  ChevronDown,
  Coffee,
  Heart,
  Home,
  Laptop,
  LogOut,
  Search,
  Settings,
  Shirt,
  ShoppingBag,
  Sparkles,
  Store,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const mainMenu = [
  {
    name: 'Inicio',
    icon: Home,
    to: '/app',
  },
  {
    name: 'Emprendimientos',
    icon: Store,
    to: '/app/emprendimientos',
  },
  {
    name: 'Productos',
    icon: ShoppingBag,
    to: '/app/productos',
  },
];

const categories = [];

export default function SidebarCliente() {
  return (
    <aside className="fixed top-0 left-0 hidden h-screen w-72 flex-col border-r border-slate-200 bg-white px-5 py-6 lg:flex">
      {/* Brand */}
      <div className="mb-8">
        <Link to="/app" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:scale-105">
            <Sparkles size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Emprende
              <span className="text-emerald-600">+</span>
            </h1>

            <p className="text-xs text-slate-500">Emprendimientos locales</p>
          </div>
        </Link>
      </div>

      {/* Main Menu */}
      <nav className="space-y-1">
        {mainMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/app'}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Categories */}
      <div className="mt-8">
        <p className="mb-3 px-3 text-xs font-semibold tracking-wide text-slate-400 uppercase">
          Categorías
        </p>

        <div className="space-y-1">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                    isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        <div className="mb-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
          <p className="text-sm font-semibold text-slate-800">Impulsa tu negocio 🚀</p>

          <p className="mt-1 text-xs text-slate-500">Descubre nuevos emprendimientos.</p>
        </div>

        {/* User Profile */}
        <button className="group flex w-full items-center gap-3 rounded-3xl border border-transparent p-3 transition-all hover:border-slate-200 hover:bg-slate-50">
          {/* Avatar */}
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/20">
              EE
            </div>

            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </div>

          {/* Info */}
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-slate-800">Emmanuel</p>

            <p className="text-xs text-slate-500">Cliente</p>
          </div>

          {/* Dropdown */}
          <ChevronDown
            size={18}
            className="text-slate-400 transition-transform group-hover:translate-y-0.5"
          />
        </button>
      </div>
    </aside>
  );
}
