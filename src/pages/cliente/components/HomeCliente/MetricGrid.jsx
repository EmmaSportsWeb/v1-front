import { Store, Package, ShoppingBag, TrendingUp } from 'lucide-react';

import MetricCard from './MetricCard';

export default function MetricGrid() {
  const metrics = [
    {
      icon: <Store />,
      title: 'Emprendimientos',
      value: '2',
      description: 'Activos actualmente',
    },
    {
      icon: <Package />,
      title: 'Productos',
      value: '24',
      description: 'Publicados',
    },
    {
      icon: <ShoppingBag />,
      title: 'Ventas',
      value: '128',
      description: 'Este mes',
    },
    {
      icon: <TrendingUp />,
      title: 'Crecimiento',
      value: '+18%',
      description: 'Últimos 30 días',
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, index) => (
        <MetricCard key={index} {...item} />
      ))}
    </section>
  );
}
