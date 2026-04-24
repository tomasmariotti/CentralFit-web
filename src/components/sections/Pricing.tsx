import { Reveal } from "@/components/Reveal";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Pase por día",
    tag: "Probá sin compromiso",
    features: ["Acceso por un día completo", "Todas las áreas y máquinas", "Asesoramiento inicial", "Sin contrato"],
    cta: "Consultar precio",
    featured: false,
  },
  {
    name: "Plan mensual",
    tag: "Más elegido",
    features: [
      "Acceso ilimitado todo el mes",
      "Pesas, funcional y boxeo",
      "Rutina personalizada",
      "Asesoramiento profesional",
      "Sin penalidades",
    ],
    cta: "Consultar ahora",
    featured: true,
  },
];

const wpp = "https://wa.me/541137598078?text=Hola!%20Quiero%20consultar%20sobre%20los%20planes%20de%20Central%20Fit";

export const Pricing = () => {
  return (
    <section id="precios" className="relative py-28 md:py-40 bg-card overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · Planes
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Planes <span className="text-primary">flexibles</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground">
              Sin contratos eternos. Sin letra chica. Vení, entrená y decidí.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 150} variant="scale">
              <div
                className={`group relative p-8 md:p-10 h-full transition-all duration-500 ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 right-8 bg-foreground text-background text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                    Más elegido
                  </span>
                )}
                <div className={`text-xs uppercase tracking-[0.3em] ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                  {p.tag}
                </div>
                <h3 className="font-display text-4xl md:text-5xl uppercase mt-2">{p.name}</h3>

                <div className="mt-6 mb-8">
                  <span className={`font-display text-6xl ${p.featured ? "" : "text-primary"}`}>$</span>
                  <span className="font-display text-6xl">—</span>
                  <p className={`text-sm mt-2 ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                    Consultá precios actualizados
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start text-sm">
                      <Check className={`w-5 h-5 flex-shrink-0 ${p.featured ? "" : "text-primary"}`} strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={wpp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    p.featured
                      ? "bg-foreground text-background hover:bg-background hover:text-foreground"
                      : "bg-primary text-primary-foreground hover:glow-lime"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="text-center mt-10 text-sm text-muted-foreground">
            Consultá precios actualizados por WhatsApp o teléfono ·{" "}
            <a href="tel:+541137598078" className="text-primary hover:underline">
              011 3759-8078
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};