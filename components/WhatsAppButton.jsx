import { CONTACTO } from '@/data/content';

export default function WhatsAppButton() {
  const url = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(
    'Hola FP Systems, me gustaría cotizar un proyecto.'
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_12px_35px_-8px_rgba(37,211,102,0.65)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contacto por WhatsApp"
    >
      <img
        src="/icons/whatsapp.svg"
        alt=""
        aria-hidden="true"
        className="w-7 h-7 brightness-0 invert"
      />
      <span className="absolute right-14 bg-[#0b0f1a] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
        ¡Chatea con nosotros!
      </span>
    </a>
  );
}
