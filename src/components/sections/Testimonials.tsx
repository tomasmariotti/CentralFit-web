import { Reveal } from "@/components/Reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Excelente atención, siempre dispuestos a ayudarte. Cambió mi forma de entrenar.",
    name: "Martín G.",
    src: "Reseña Google",
  },
  {
    quote: "Las máquinas están impecables y el ambiente es increíble. Lo recomiendo mil por ciento.",
    name: "Camila R.",
    src: "Reseña Google",
  },
  {
    quote: "Muy buen asesoramiento y las clases de boxeo son recomendadísimas. Un golazo.",
    name: "Juan P.",
    src: "Reseña Google",
  },
  {
    quote: "Encontré una comunidad. Profes copados que te corrigen y te empujan a más.",
    name: "Lucía M.",
    src: "Reseña Google",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-28 md:py-40 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · Testimonios
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Lo que dicen <br />
              nuestros <span className="text-primary">alumnos</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">5.0 en Google · 200+ reseñas</span>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} variant="scale">
              <div className="group relative bg-background border border-border p-8 md:p-10 h-full hover:border-primary transition-all duration-500 hover:-translate-y-1">
                <Quote className="w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors mb-4" />
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-bold uppercase tracking-wide">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {t.src}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};