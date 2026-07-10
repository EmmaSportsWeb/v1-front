import { Store, Package, ShoppingBag } from 'lucide-react';

import ActionCard from './ActionCard';

export default function QuickActions() {
  return (
    <section>
      <div className="grid gap-5 md:grid-cols-3">
        <ActionCard
          to="/app/crear-emprendimiento"
          icon={<Store />}
          title="Crear emprendimiento"
          description="Agrega un nuevo negocio a tu perfil."
        />

        <ActionCard
          to="/app/productos/crear"
          icon={<Package />}
          title="Agregar producto"
          description="Publica nuevos productos o servicios."
        />

        <ActionCard
          to="/marketplace"
          icon={<ShoppingBag />}
          title="Ver marketplace"
          description="Mira cómo ven tus clientes tu negocio."
        />
      </div>
    </section>
  );
}
