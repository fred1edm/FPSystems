import Reveal from './Reveal';
import ServiceShowcase from './ServiceShowcase';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-10 md:pt-32 md:pb-16 hero-mesh">
      {/* Rejilla de marca */}
      <div
        className="absolute inset-0 grid-pattern pointer-events-none"
        style={{ maskImage: 'radial-gradient(70% 60% at 50% 15%, black, transparent)', WebkitMaskImage: 'radial-gradient(70% 60% at 50% 15%, black, transparent)' }}
      />

      {/* Orbes de luz */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div
        className="absolute bottom-0 -left-32 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl animate-float-slow pointer-events-none"
        style={{ animationDelay: '-3.5s' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center">
        <div className="md:col-span-7 space-y-3 md:space-y-5 text-center md:text-left">
          <Reveal>
            <h1 className="font-title font-extrabold text-[1.75rem] sm:text-4xl lg:text-5xl text-white leading-[1.05] tracking-tighter">
              Sistemas a medida para{' '}
              <span className="text-gradient">negocios y empresas</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Creamos software, páginas web y automatizaciones para ordenar procesos,
              mejorar la gestión y fortalecer tu presencia digital.
            </p>
          </Reveal>

        </div>

        <Reveal delay={200} className="md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0">
          <ServiceShowcase />
        </Reveal>
      </div>
    </section>
  );
}
