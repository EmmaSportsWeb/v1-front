import Input from './Input';

export default function FormSection({ title, fields, form, errors, onChange }) {
  return (
    <section>
      <h2 className="mb-6 text-lg font-semibold text-slate-900">{title}</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <Input key={field.name} name={field.name} icon={field.icon} placeholder={field.placeholder} value={form[field.name]} error={errors[field.name]} onChange={onChange} />
        ))}
      </div>
    </section>
  );
}
