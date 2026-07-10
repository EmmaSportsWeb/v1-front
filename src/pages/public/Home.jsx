import React from 'react';

export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl leading-tight font-bold text-slate-900 md:text-7xl">
          Lleva tu emprendimiento
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            al siguiente nivel
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          Administra tus productos, servicios y clientes desde una plataforma simple, moderna y
          diseñada para emprendedores.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"></button>

          <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"></button>
        </div>
      </div>
    </section>
  );
}
