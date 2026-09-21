import Reveal from './Reveal';
import { CONTACTO, PLANES } from '@/data/content';

export default function Plans() {
  return (
    <section className="py-12 md:py-16 bg-brand-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-brand-graphite tracking-tighter">
              Planes y modalidades
            </h2>
            <p className="text-gray-500 text-sm">
              Consulta por WhatsApp para recibir una propuesta a medida.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PLANES.map((plan, i) => {
            const waText = `Hola, solicito información sobre ${plan.titulo}`;
            const waUrl = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(waText)}`;
            return (
              <Reveal key={plan.titulo} delay={(i % 4) * 60}>
                <div
                  className={`h-full p-4 rounded-xl flex flex-col justify-between transition-all duration-300 ${
                    plan.popular
                      ? 'relative border-2 border-brand-purpleBright bg-gradient-to-b from-purple-50/70 to-white shadow-[0_16px_40px_-16px_rgba(109,40,217,0.4)] hover:-translate-y-0.5'
                      : 'border border-gray-100 bg-white shadow-sm hover:border-brand-purpleBright/30 hover:-translate-y-0.5'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-brand-purpleBright to-brand-purpleGlow text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm">
                      Popular
                    </span>
                  )}
                  <div>
                    <h4 className="font-title font-bold text-sm text-brand-graphite mb-1">
                      {plan.titulo}
                    </h4>
                    <p className="text-[11px] text-gray-500 mb-3">{plan.descripcion}</p>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center text-white text-[11px] font-semibold py-2 rounded-lg transition-all duration-300 active:scale-[0.98] ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-purpleDark to-brand-purpleBright hover:from-brand-purpleBright hover:to-brand-purpleGlow glow-purple'
                        : 'bg-brand-graphite hover:bg-gradient-to-r hover:from-brand-purpleBright hover:to-brand-purpleGlow'
                    }`}
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
