import React from 'react';
import { Outlet } from 'react-router-dom';

export default function ClienteLayout() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
