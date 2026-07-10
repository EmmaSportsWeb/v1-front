import DashboardHero from './components/HomeCliente/DashboardHero';
import MetricGrid from './components/HomeCliente/MetricGrid';
import QuickActions from './components/HomeCliente/QuickActions';
import GrowthStatus from './components/HomeCliente/GrowthStatus';
import NavbarCliente from './components/HomeCliente/NavbarCliente';

export default function HomeCliente() {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <main className="px-4 pt-6 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <DashboardHero />

          <QuickActions />

          <GrowthStatus />
        </div>
      </main>
    </div>
  );
}
