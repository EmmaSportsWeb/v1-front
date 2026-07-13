import DashboardHero from './components/DashboardHero';
import QuickActions from './components/QuickActions';

export default function HomeCliente() {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Parte superior */}
      <section className="w-full">
        <DashboardHero />
      </section>

      {/* Parte inferior */}
      <section className="w-full">
        <QuickActions />
      </section>
    </div>
  );
}
