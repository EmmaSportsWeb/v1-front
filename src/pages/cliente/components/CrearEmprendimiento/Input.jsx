import React from 'react';

export default function Input({ icon, label, error, className = '', ...props }) {
  const message = Array.isArray(error) ? error[0] : error;

  const hasError = Boolean(message);

  return (
    <div className={className}>
      {label && <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>}

      <div
        className={`flex h-12 items-center gap-3 rounded-xl border bg-white px-4 shadow-sm transition-all duration-200 ${
          hasError ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100'
        }`}
      >
        {icon && <div className={`flex-shrink-0 transition-colors ${hasError ? 'text-red-500' : 'text-slate-400'}`}>{icon}</div>}

        <input {...props} className="h-full w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400" />
      </div>

      {hasError && <p className="mt-2 text-sm font-medium text-red-600">{message}</p>}
    </div>
  );
}
