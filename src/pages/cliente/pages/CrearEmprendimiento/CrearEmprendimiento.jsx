import { useState } from 'react';

import { useAuth } from '../../../../context/AuthContext';

import useCrearEmprendimiento from './hooks/useCrearEmprendimiento';

import PreviewCard from '../../components/CrearEmprendimiento/PreviewCard';
import UploadCard from '../../components/CrearEmprendimiento/UploadCard';
import Input from '../../components/CrearEmprendimiento/Input';
import Header from '../../components/CrearEmprendimiento/Header';
import FormSection from '../../components/CrearEmprendimiento/FormSection';
import FormTextarea from '../../components/CrearEmprendimiento/FormTextarea';

import SubscriptionModal from '../../../../components/ui/SubscriptionModal';

import { informacionFields, contactoFields, redesFields, ubicacionFields } from '../../components/CrearEmprendimiento/config/emprendimientoFields';

export default function CrearEmprendimiento() {
  const { user } = useAuth();

  const { form, errors, handleChange, handleImage, handleSubmit } = useCrearEmprendimiento();

  const [showSubscription, setShowSubscription] = useState(false);

  const submit = () => {
    console.log('Usuario actual:', user);

    if (!user) {
      console.log('No existe usuario');

      return;
    }

    const emprendimientosActuales = user.emprendimientos_count ?? 0;

    const limiteEmprendimientos = user.plan?.max_emprendimientos ?? 1;

    console.log({
      emprendimientosActuales,
      limiteEmprendimientos,
    });

    const alcanzoLimite = emprendimientosActuales >= limiteEmprendimientos;

    console.log('¿Alcanzo limite?', alcanzoLimite);

    if (alcanzoLimite) {
      setShowSubscription(true);

      return;
    }

    handleSubmit();
  };

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto">
        <Header />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* PREVIEW */}

          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <PreviewCard form={form} />
            </div>
          </aside>

          {/* FORMULARIO */}

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <div className="space-y-10">
                {/* INFORMACIÓN */}

                <section>
                  <FormSection title="Información general" fields={informacionFields} form={form} errors={errors} onChange={handleChange} />

                  <div className="mt-5">
                    <FormTextarea value={form.descripcion} error={errors.descripcion} onChange={handleChange} />
                  </div>
                </section>

                {/* IMÁGENES */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Identidad visual</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <UploadCard title="Logo" name="logo" value={form.logo_preview} error={errors.logo} onChange={handleImage} />

                    <UploadCard title="Banner" name="banner" value={form.banner_preview} error={errors.banner} onChange={handleImage} />
                  </div>
                </section>

                {/* CONTACTO */}

                <FormSection title="Contacto" fields={contactoFields} form={form} errors={errors} onChange={handleChange} />

                {/* REDES */}

                <FormSection title="Redes sociales" fields={redesFields} form={form} errors={errors} onChange={handleChange} />

                {/* UBICACIÓN */}

                <FormSection title="Ubicación" fields={ubicacionFields} form={form} errors={errors} onChange={handleChange} />

                {/* COLOR */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Apariencia</h2>

                  <div className="flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-xl border"
                      style={{
                        background: form.color,
                      }}
                    />

                    <input type="color" name="color" value={form.color} onChange={handleChange} className="h-14 w-20 cursor-pointer" />

                    <div className="flex-1">
                      <Input name="color" value={form.color} error={errors.color} onChange={handleChange} />
                    </div>
                  </div>
                </section>

                {/* BOTÓN */}

                <button onClick={submit} className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500">
                  Crear emprendimiento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL PLANES */}

      <SubscriptionModal open={showSubscription} onClose={() => setShowSubscription(false)} />
    </div>
  );
}
