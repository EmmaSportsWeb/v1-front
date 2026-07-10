import {
  X,
  Home,
  Store,
  ShoppingBag,
  Heart,
  Search,
  Coffee,
  Shirt,
  Sparkles,
  Laptop,
} from 'lucide-react';

const categories = [
  {
    name: 'Inicio',
    icon: Home,
  },
  {
    name: 'Emprendimientos',
    icon: Store,
  },
  {
    name: 'Productos',
    icon: ShoppingBag,
  },
  {
    name: 'Favoritos',
    icon: Heart,
  },
];

const explore = [
  {
    name: 'Gastronomía',
    icon: Coffee,
  },
  {
    name: 'Moda',
    icon: Shirt,
  },
  {
    name: 'Tecnología',
    icon: Laptop,
  },
  {
    name: 'Otros',
    icon: Sparkles,
  },
];

export default function MobileSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } `}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h2 className="font-bold text-slate-800">Explorar</h2>

            <p className="text-xs text-slate-500">Encuentra negocios locales</p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-5">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-400">
            <Search size={18} />
            Buscar...
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1 px-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Categories */}
        <div className="mt-8 px-4">
          <p className="mb-3 px-3 text-xs font-semibold text-slate-400 uppercase">Categorías</p>

          <div className="space-y-1">
            {explore.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
