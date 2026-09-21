'use client';

import { useState } from 'react';

import Icon from './icons';
import Reveal from './Reveal';
import { CONTACTO, VALORES, SERVICIOS_FORMULARIO, RUBROS } from '@/data/content';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries());
    const required = ['nombre', 'telefono', 'servicio', 'mensaje'];
    if (required.some((field) => !String(raw[field] || '').trim()) || !fd.get('consentimiento')) {
      setStatus('error'); setErrorMessage('Completa los campos obligatorios y acepta el contacto por WhatsApp.'); return;
    }
    if (Object.values(raw).some((value) => /<[^>]*>/.test(String(value)))) {
      setStatus('error'); setErrorMessage('Revisa los datos ingresados.'); return;
    }
    setStatus('sending'); setErrorMessage('');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FP_API_URL || 'http://localhost:4000'}/contacto`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...raw, consentimiento: true, origen: 'web' }),
      });
      if (!response.ok) throw new Error('request');
      setStatus('success'); form.reset();
    } catch {
      setStatus('error'); setErrorMessage('No pudimos enviar tu solicitud. Puedes escribirnos directamente por WhatsApp.');
    }
  }
  return (
    <section
      id="contacto"
      className="relative py-16 md:py-20 bg-brand-graphite overflow-hidden"
      style={{
        background:
              'radial-gradient(60% 80% at 80% 10%, rgba(109,40,217,0.25), transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(167,139,250,0.15), transparent 60%), linear-gradient(180deg, #1D2228 0%, #11131A 100%)',
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <Reveal className="lg:col-span-5 space-y-6">
          <div id="nosotros">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-white tracking-tighter mb-3">
              Sobre FP Systems
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              FP Systems nace de la unión entre Figueroa y Panaifo con el objetivo de crear
              soluciones digitales útiles, modernas y accesibles para negocios, emprendedores e
              instituciones.
            </p>
          </div>

          <blockquote className="relative rounded-xl bg-white/[0.04] border border-white/10 p-4">
            <span className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-brand-purpleBright to-brand-purpleGlow" />
            <p className="pl-3 text-zinc-300 text-xs leading-relaxed">
              &quot;No solo creamos páginas o sistemas; buscamos entender cómo trabaja cada negocio
              para construir soluciones que se adapten a su realidad.&quot;
            </p>
          </blockquote>

          <div className="grid grid-cols-2 gap-2">
            {VALORES.map((v) => (
              <div key={v.titulo} className="text-center py-2">
                <span className="text-xs font-bold text-purple-300">{v.titulo}</span>
                <p className="text-[10px] text-zinc-500">{v.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center space-x-2 text-xs text-zinc-300">
              <Icon name="mail" className="w-4 h-4 text-purple-300" />
              <span>{CONTACTO.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-zinc-300">
              <Icon name="map-pin" className="w-4 h-4 text-purple-300" />
              <span>{CONTACTO.ubicacionCorta}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <h3 className="font-title font-bold text-lg text-white mb-4">
            Cuéntanos tu proyecto
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-2xl"
            aria-label="Formulario de contacto"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="nombre" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-purpleGlow focus:ring-1 focus:ring-purple-500/30 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono" name="telefono" type="tel" maxLength="20" placeholder="987 654 321"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-purpleGlow focus:ring-1 focus:ring-purple-500/30 transition-all"
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="negocio" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">Tipo de negocio</label>
                <select id="negocio" name="negocio" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-purpleGlow [&>option]:bg-[#1f2937]">
                  <option value="">Selecciona una opción</option>
                  {RUBROS.map((rubro) => <option key={rubro.titulo} value={rubro.titulo}>{rubro.titulo}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="presupuesto" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">Presupuesto estimado</label>
                <select id="presupuesto" name="presupuesto" defaultValue="Por definir" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-purpleGlow [&>option]:bg-[#1f2937]">
                  {['Menos de S/ 500', 'S/ 500 - S/ 1,000', 'S/ 1,000 - S/ 2,500', 'Más de S/ 2,500', 'Por definir'].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="servicio" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">
                Servicio que necesita
              </label>
              <select
                id="servicio"
                name="servicio"
                required
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-purpleGlow focus:ring-1 focus:ring-purple-500/30 transition-all [&>option]:bg-[#1f2937]"
              >
                {SERVICIOS_FORMULARIO.map((opcion) => (
                  <option key={opcion}>{opcion}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-[10px] font-semibold text-zinc-300 uppercase mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="3"
                maxLength="1500"
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
                className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-purpleGlow focus:ring-1 focus:ring-purple-500/30 transition-all"
                required
              ></textarea>
            </div>
            <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="hidden" />
            <label className="flex items-start gap-2 text-[11px] text-zinc-400">
              <input type="checkbox" name="consentimiento" required className="mt-0.5 accent-brand-purpleBright" />
              <span>Acepto que FP Systems me contacte por WhatsApp sobre esta solicitud.</span>
            </label>
            {status === 'success' && <p className="rounded-lg bg-emerald-500/10 border border-emerald-400/20 p-3 text-xs text-emerald-200">Recibimos tu solicitud. Nos pondremos en contacto contigo por WhatsApp.</p>}
            {status === 'error' && <p className="rounded-lg bg-red-500/10 border border-red-400/20 p-3 text-xs text-red-200">{errorMessage} <a className="underline font-semibold" href={`https://wa.me/${CONTACTO.whatsapp}`} target="_blank" rel="noreferrer">Escribir directamente por WhatsApp</a></p>}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-brand-purpleDark to-brand-purpleBright hover:from-brand-purpleBright hover:to-brand-purpleGlow text-white font-semibold py-2.5 rounded-lg transition-all duration-300 text-xs glow-purple active:scale-[0.98]"
            >
              {status === 'sending' ? 'Enviando...' : 'Solicitar información'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
