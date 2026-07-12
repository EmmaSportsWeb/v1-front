import { Outlet, useMatches } from 'react-router-dom';

import NavbarCliente from '../../pages/cliente/components/HomeCliente/NavbarCliente';
import SidebarCliente from '../../pages/cliente/components/HomeCliente/SidebarCliente';

export default function ClienteLayout() {
  const matches = useMatches();

  const showNavbar = matches.some((route) => route.handle?.navbar === true);

  return (
    <div className="min-h-screen">
      <SidebarCliente />

      <div className="lg:ml-72">
        {showNavbar && <NavbarCliente />}

        <main className="p-4 sm:p-6 lg:p-4">
          <div className="min-h-[calc(100vh-2rem)] w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all sm:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
