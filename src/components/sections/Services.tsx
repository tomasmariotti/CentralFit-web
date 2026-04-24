import { Reveal } from "@/components/Reveal";
import { Dumbbell, Flame, Hand, Target, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Pesas y máquinas",
    desc: "Equipamiento moderno y en perfecto estado para que rindas al máximo.",
    n: "01",
  },
  {
    icon: Flame,
    title: "Entrenamiento funcional",
    desc: "Clases intensas para mejorar fuerza, resistencia y movilidad.",
    n: "02",
  },
  {
    icon: Hand,
    title: "Boxeo",
    desc: "Entrenamientos dinámicos y desafiantes que te ponen a prueba.",
    n: "03",
  },
  {
    icon: Target,
    title: "Rutinas personalizadas",
    desc: "Plan adaptado a tus objetivos, tu nivel y tu disponibilidad.",
    n: "04",
  },
  {
    icon: Users,
    title: "Asesoramiento profesional",
    desc: "Profesores que te acompañan, corrigen y motivan en cada paso.",
    n: "05",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="relative py-28 md:py-40 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
                · Servicios
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95] max-w-3xl">
                Todo lo que necesitás <br />
                para entrenar <span className="text-primary">mejor</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-muted-foreground max-w-sm">
              Desde pesas libres hasta boxeo. Tenemos el equipo, el espacio y el equipo humano
              para que llegues a donde quieras.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80} variant="scale">
                <div className="group relative bg-card p-8 md:p-10 h-full overflow-hidden cursor-pointer transition-all duration-500 hover:bg-background">
                  {/* Number watermark */}
                  <span className="absolute top-4 right-4 font-display text-5xl text-muted-foreground/15 group-hover:text-primary/40 transition-colors">
                    {s.n}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
                  </div>

                  <h3 className="font-display text-2xl uppercase mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>

                  <ArrowUpRight className="absolute bottom-8 right-8 w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />

                  {/* Bottom accent line */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                </div>
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={400} variant="scale">
            <a
              href="#contacto"
              className="group relative bg-primary text-primary-foreground p-8 md:p-10 h-full overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.3em] opacity-80">¿Listo?</span>
                <h3 className="font-display text-3xl uppercase mt-4 leading-tight">
                  Probá tu primera clase <br />
                  <span className="underline decoration-2 underline-offset-4">gratis</span>.
                </h3>
              </div>
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};