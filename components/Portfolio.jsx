import Reveal from './Reveal';
import { PROYECTOS } from '@/data/content';

export default function Portfolio() {
  const featured = PROYECTOS.filter((p) => p.image);
  const others = PROYECTOS.filter((p) => !p.image);

  return (
    <section id="proyectos" className="py-12 md:py-16 bg-brand-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h2 className="font-title font-bold text-2xl md:text-3xl text-brand-graphite tracking-tighter">
              Proyectos que desarrollamos
            </h2>
            <p className="text-gray-500 text-sm">
              Sistemas y soluciones reales para distintos negocios.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((proyecto, i) => (
            <Reveal key={proyecto.titulo} delay={(i % 2) * 80}>
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-[0_16px_40px_-16px_rgba(109,40,217,0.2)] hover:border-brand-purpleBright/30 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-40 bg-gradient-to-br from-brand-graphite to-[#241c4d] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <img
                    src={proyecto.image}
                    alt={`Vista de ${proyecto.titulo}`}
                    className="relative w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite/35 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-title font-bold text-sm text-brand-graphite">
                      {proyecto.titulo}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 flex-1">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proyecto.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-50 text-brand-purpleBright text-[10px] px-2 py-0.5 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contacto"
                    className="w-full text-center bg-brand-lightGray hover:bg-gradient-to-r hover:from-brand-purpleBright hover:to-brand-purpleGlow hover:text-white text-brand-graphite text-xs font-semibold py-2 rounded-lg transition-all duration-300 border border-gray-100"
                  >
                    Solicitar algo similar
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {others.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-3">
            {others.map((proyecto, i) => (
              <Reveal key={proyecto.titulo} delay={i * 60}>
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-brand-purpleBright/30 transition-all duration-300 h-full flex flex-col">
                  <h3 className="font-title font-semibold text-xs text-brand-graphite mb-1">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-2 flex-1">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {proyecto.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-50 text-brand-purpleBright text-[9px] px-1.5 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contacto"
                    className="text-center text-brand-purpleBright hover:text-white text-[10px] font-semibold py-1.5 rounded-lg border border-brand-purpleBright/20 hover:bg-brand-purpleBright transition-all duration-300"
                  >
                    Consultar
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
