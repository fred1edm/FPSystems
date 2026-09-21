import { HERO_SHOWCASE } from '@/data/content'

export default function ServiceShowcase() {
  return (
    <div className="service-marquee" aria-label="Showcase de servicios FP Systems">
      <div className="service-marquee-track">
        {/* Primer grupo — accesible */}
        <div className="service-marquee-group">
          {HERO_SHOWCASE.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt || slide.title}
              className="service-marquee-image"
            />
          ))}
        </div>

        {/* Segundo grupo — duplicado visual para loop infinito */}
        <div className="service-marquee-group" aria-hidden="true">
          {HERO_SHOWCASE.map((slide) => (
            <img
              key={`clone-${slide.id}`}
              src={slide.image}
              alt=""
              className="service-marquee-image"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
