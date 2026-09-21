import { CONTACTO, NAV_LINKS, REDES_SOCIALES } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-gray-400 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="space-y-3">
          <img src="/logo-footer.webp" alt="FP Systems" className="h-8 w-auto" />
          <p className="text-[10px] leading-relaxed">
            Sistemas a medida, automatización inteligente y desarrollo web.
          </p>
        </div>
        <div>
          <h5 className="text-white text-[10px] font-bold uppercase tracking-wider mb-2">Navegación</h5>
          <ul className="space-y-1.5 text-[10px]">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-purple-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white text-[10px] font-bold uppercase tracking-wider mb-2">Contacto</h5>
          <p className="text-[10px]">{CONTACTO.ubicacion}</p>
          <p className="text-[10px]">{CONTACTO.email}</p>
          <div className="flex items-center gap-2 mt-3">
            {REDES_SOCIALES.map((red) => (
              <a
                key={red.nombre}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${red.nombre} de FP Systems`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] hover:bg-brand-purpleBright/20 hover:border-brand-purpleGlow/50 transition-colors"
              >
                <img src={red.icono} alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert opacity-80" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-4 text-center text-[10px]">
        <p>&copy; {new Date().getFullYear()} FP Systems. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
