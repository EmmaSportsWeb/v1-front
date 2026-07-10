import { Store, Mail, Phone, Globe, MapPin, Palette } from 'lucide-react';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

import useCrearEmprendimiento from '../hooks/useCrearEmprendimiento';

import PreviewCard from '../components/CrearEmprendimiento/PreviewCard';
import Input from '../components/CrearEmprendimiento/Input';
import UploadCard from '../components/CrearEmprendimiento/UploadCard';
import Header from '../components/CrearEmprendimiento/Header';

export default function CrearEmprendimiento() {
  const { form, handleChange, handleImage } = useCrearEmprendimiento();

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto">
        {/* HEADER */}
        <Header />

        {/* EDITOR */}
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
                {/* Información */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Información general</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      name="name"
                      icon={<Store size={18} />}
                      placeholder="Nombre del emprendimiento"
                      value={form.name}
                      onChange={handleChange}
                    />

                    <Input
                      name="category"
                      placeholder="Categoría"
                      value={form.category}
                      onChange={handleChange}
                    />

                    <textarea
                      name="description"

                      value={form.description}

                      onChange={handleChange}

                      rows="4"

                      placeholder="Descripción"

                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 md:col-span-2"
                    />
                  </div>
                </section>

                {/* Imágenes */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Identidad visual</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <UploadCard
                      title="Logo"

                      name="logo"

                      value={form.logo}

                      onChange={handleImage}
                    />

                    <UploadCard
                      title="Banner"

                      name="banner"

                      value={form.banner}

                      onChange={handleImage}
                    />
                  </div>
                </section>

                {/* Contacto */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Contacto</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      name="email"
                      icon={<Mail size={18} />}
                      placeholder="Correo"
                      value={form.email}
                      onChange={handleChange}
                    />

                    <Input
                      name="phone"
                      icon={<Phone size={18} />}
                      placeholder="Teléfono"
                      value={form.phone}
                      onChange={handleChange}
                    />

                    <Input
                      name="whatsapp"
                      icon={<FaWhatsapp />}
                      placeholder="WhatsApp"
                      value={form.whatsapp}
                      onChange={handleChange}
                    />

                    <Input
                      name="website"
                      icon={<Globe size={18} />}
                      placeholder="Sitio web"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>
                </section>

                {/* Redes */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Redes sociales</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      name="facebook"
                      icon={<FaFacebook />}
                      placeholder="Facebook"
                      value={form.facebook}
                      onChange={handleChange}
                    />

                    <Input
                      name="instagram"
                      icon={<FaInstagram />}
                      placeholder="Instagram"
                      value={form.instagram}
                      onChange={handleChange}
                    />

                    <Input
                      name="tiktok"
                      icon={<FaTiktok />}
                      placeholder="TikTok"
                      value={form.tiktok}
                      onChange={handleChange}
                    />

                    <Input
                      name="youtube"
                      icon={<FaYoutube />}
                      placeholder="Youtube"
                      value={form.youtube}
                      onChange={handleChange}
                    />
                  </div>
                </section>

                {/* Ubicación */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Ubicación</h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      name="address"
                      icon={<MapPin size={18} />}
                      placeholder="Dirección"
                      value={form.address}
                      onChange={handleChange}
                    />

                    <Input
                      name="city"
                      placeholder="Ciudad"
                      value={form.city}
                      onChange={handleChange}
                    />

                    <Input
                      name="region"
                      placeholder="Región"
                      value={form.region}
                      onChange={handleChange}
                    />

                    <Input
                      name="country"
                      placeholder="País"
                      value={form.country}
                      onChange={handleChange}
                    />
                  </div>
                </section>

                {/* Apariencia */}

                <section>
                  <h2 className="mb-6 text-lg font-semibold text-slate-900">Apariencia</h2>

                  <div className="flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-xl"

                      style={{
                        background: form.cover_color,
                      }}
                    />

                    <input
                      type="color"

                      name="cover_color"

                      value={form.cover_color}

                      onChange={handleChange}

                      className="h-14 w-20"
                    />

                    <Input
                      name="cover_color"

                      icon={<Palette size={18} />}

                      value={form.cover_color}

                      onChange={handleChange}
                    />
                  </div>
                </section>

                <button className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500">
                  Crear emprendimiento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
