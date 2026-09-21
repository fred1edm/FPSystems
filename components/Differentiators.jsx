import Icon from './icons';
import Reveal from './Reveal';
import { RAZONES, PROCESO } from '@/data/content';

export default function Differentiators() {
  return (
    <section id="proceso" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-brand-graphite tracking-tighter">
              ¿Por qué elegirnos?
            </h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 mb-14">
            {RAZONES.map((razon) => (
              <div
                key={razon.titulo}
                className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-purple-50/70 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 text-brand-purpleBright flex items-center justify-center mb-2 group-hover:from-brand-purpleBright group-hover:to-brand-purpleGlow group-hover:text-white transition-all duration-300">
                  <Icon name={razon.icono} className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-brand-graphite">{razon.titulo}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-brand-graphite tracking-tighter">
              Así trabajamos
            </h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {PROCESO.map((paso, index) => (
                <div key={paso.titulo} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purpleBright to-brand-purpleGlow text-white flex items-center justify-center font-bold text-sm shadow-md mb-2 relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-title font-semibold text-xs text-brand-graphite mb-0.5">
                    {paso.titulo}
                  </h4>
                  <p className="text-[10px] text-gray-500 leading-tight max-w-[120px]">
                    {paso.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
