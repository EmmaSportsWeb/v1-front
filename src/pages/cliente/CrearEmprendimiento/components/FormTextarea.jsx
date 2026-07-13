export default function FormTextarea({ value, error, onChange }) {
  const message = Array.isArray(error) ? error[0] : error;

  return (
    <div className="space-y-2 md:col-span-2">
      <textarea
        name="descripcion"
        value={value}
        onChange={onChange}
        rows="4"
        placeholder="Descripción"
        className={`w-full rounded-xl bg-white px-4 py-3 text-slate-800 transition outline-none ${message ? 'border border-red-500 ring-4 ring-red-100' : 'border border-slate-200 focus:border-emerald-500'} `}
      />

      {message && <p className="text-sm font-medium text-red-600">{message}</p>}
    </div>
  );
}
