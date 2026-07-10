import { Bell, Menu, Search } from 'lucide-react';
import { useState } from 'react';

import MobileSidebar from './MobileSidebar';

export default function NavbarCliente() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-3xl border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl">
          {/* Mobile menu + logo */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <Search size={20} />
              </div>

              <span className="font-bold text-slate-800">Emprende+</span>
            </div>
          </div>

          {/* Buscador ocupa todo el espacio */}
          <div className="hidden flex-1 lg:flex">
            <div className="flex h-11 w-full items-center gap-3 rounded-2xl bg-slate-100 px-4 text-sm text-slate-500 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/20">
              <Search size={18} />

              <input
                type="text"
                placeholder="Buscar emprendimientos, productos..."
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Notificaciones */}
          <div className="flex shrink-0 items-center gap-3">
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600">
              <Bell size={20} />

              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </button>
          </div>
        </div>
      </header>

      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
