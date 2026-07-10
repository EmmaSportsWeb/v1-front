import React from 'react';

export default function Input({ icon, label, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>}

      <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
        {icon && <div className="flex-shrink-0 text-slate-400">{icon}</div>}

        <input
          {...props}
          className="h-full w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
