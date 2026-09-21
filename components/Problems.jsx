import Icon from './icons';
import Reveal from './Reveal';
import { PROBLEMAS } from '@/data/content';

export default function Problems() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-brand-lightGray">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purpleGlow/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center rounded-full border border-brand-purpleBright/20 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-purpleBright shadow-sm">
              Señales de alerta
            </span>
            <h2 className="font-title font-bold text-2xl md:text-3xl text-brand-graphite tracking-tighter">
              ¿Todavía gestionas tu negocio de forma manual?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Simplifica tu operación y toma mejores decisiones con una solución hecha para ti.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMAS.map((problema, index) => (
              <div
                key={problema}
                className="group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-sm font-medium text-brand-darkGray shadow-[0_8px_24px_-18px_rgba(29,34,40,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purpleBright/35 hover:shadow-[0_14px_28px_-18px_rgba(85,31,178,0.45)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-400 ring-1 ring-red-100">
                  <Icon name="alert-circle" className="h-3.5 w-3.5" />
                </span>
                <span className="leading-snug">{problema}</span>
                <span className="ml-auto text-[10px] font-bold text-gray-300">0{index + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="h-8 w-px bg-gradient-to-b from-gray-200 to-brand-purpleBright" />
            <a href="#contacto" className="flex items-center gap-2 rounded-full bg-brand-graphite px-5 py-3 text-white shadow-[0_12px_28px_-14px_rgba(29,34,40,0.8)] transition-transform hover:-translate-y-0.5">
              <Icon name="sparkles" className="h-4 w-4 text-brand-purpleGlow" />
              <span className="text-sm font-semibold">Hablemos de una solución para tu negocio</span>
              <Icon name="sparkles" className="h-4 w-4 text-brand-purpleGlow" />
            </a>
            <div className="h-8 w-px bg-gradient-to-b from-brand-purpleBright to-transparent" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
