import { Outlet } from 'react-router-dom';
import PublicNavbar from '../../pages/public/components/PublicNavbar';

export default function PublicLayout() {
  return (
    <div className="min-h-screen w-full bg-white">
      <PublicNavbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
