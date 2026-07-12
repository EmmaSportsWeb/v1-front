import { ChevronDown, Compass, Home, Menu, Sparkles, Store, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const menu = [
  {
    title: 'Gestionar',
    items: [
      {
        name: 'Inicio',
        icon: Home,
        to: '/app',
      },
      {
        name: 'Mis emprendimientos',
        icon: Store,
        to: '/app/mis-emprendimientos',
      },
    ],
  },
  {
    title: 'Explorar',
    items: [
      {
        name: 'Explorar emprendimientos',
        icon: Compass,
        to: '/app/emprendimientos',
      },
    ],
  },
];

function SidebarContent({ mobile = false, onClose }) {
  return (
    <>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link to="/app" onClick={onClose} className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:scale-105">
            <Sparkles size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Emprende<span className="text-emerald-600">+</span>
            </h1>

            <p className="text-xs text-slate-500">Emprendimientos locales</p>
          </div>
        </Link>

        {mobile && (
          <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-6">
        {menu.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">{section.title}</p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === '/app'}
                    onClick={onClose}
                    className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'} `}
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="mt-auto">
        <div className="mb-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
          <p className="text-sm font-semibold text-slate-800">Impulsa tu negocio 🚀</p>

          <p className="mt-1 text-xs text-slate-500">Descubre nuevos emprendimientos.</p>
        </div>

        {/* User */}
        <button className="group flex w-full items-center gap-3 rounded-3xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-slate-50">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-lg">EE</div>

            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </div>

          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-slate-800">Emmanuel</p>

            <p className="text-xs text-slate-500">Cliente</p>
          </div>

          <ChevronDown size={18} className="text-slate-400 transition group-hover:translate-y-0.5" />
        </button>
      </div>
    </>
  );
}

export default function SidebarCliente() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-white/90 text-emerald-600 shadow-lg shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-50 active:scale-95 lg:hidden"
      >
        <Menu size={21} strokeWidth={2.2} />
      </button>

      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 hidden h-screen w-72 flex-col border-r border-slate-200 bg-white px-5 py-6 lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition lg:hidden ${open ? 'visible' : 'invisible'} `}>
        {/* Overlay */}
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'} `} />

        {/* Panel */}
        <aside className={`absolute top-0 left-0 flex h-full w-72 flex-col bg-white px-5 py-6 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} `}>
          <SidebarContent mobile onClose={() => setOpen(false)} />
        </aside>
      </div>
    </>
  );
}
