import Icon from './icons';
import Reveal from './Reveal';
import { RUBROS } from '@/data/content';

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purpleGlow/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-brand-purpleBright" />
            <h2 className="font-title text-4xl font-extrabold tracking-tight text-brand-purpleDark md:text-5xl">
              Para tu negocio
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {RUBROS.map((rubro, index) => (
            <Reveal key={rubro.titulo} delay={index * 45}>
              <div className="group flex items-center gap-4 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-purple-50/70">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center text-brand-purpleDark transition-transform duration-300 group-hover:scale-110">
                  <Icon name={rubro.icono} className="h-9 w-9" strokeWidth={1.8} />
                </span>
                <span className="font-title text-xl font-bold text-brand-purpleDark md:text-2xl">
                  {rubro.titulo}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
