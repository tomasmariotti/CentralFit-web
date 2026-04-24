import { Reveal } from "@/components/Reveal";
import boxingImg from "@/assets/boxing.jpg";
import { Clock } from "lucide-react";

const days = [
  { day: "Lunes", hours: "06:00 — 23:00" },
  { day: "Martes", hours: "06:00 — 23:00" },
  { day: "Miércoles", hours: "06:00 — 23:00" },
  { day: "Jueves", hours: "06:00 — 23:00" },
  { day: "Viernes", hours: "06:00 — 23:00" },
  { day: "Sábado", hours: "08:00 — 16:00" },
  { day: "Domingo", hours: "Cerrado", closed: true },
];

export const Schedule = () => {
  return (
    <section id="horarios" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <Reveal variant="left">
            <div className="relative">
              <img
                src={boxingImg}
                alt="Entrenamiento de boxeo en Central Fit"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-display text-xs uppercase tracking-widest text-primary">
                  Abierto ahora
                </span>
                <p className="font-display text-2xl uppercase mt-1">Vení cuando quieras</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · Horarios
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Entrená <br />
              cuando <span className="text-primary">quieras</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground max-w-md">
              Horarios amplios pensados para adaptarse a tu rutina. Vení antes del trabajo, en
              tu pausa o después. Acá siempre hay lugar.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-border">
            {days.map((d, i) => (
              <Reveal key={d.day} delay={250 + i * 50}>
                <div className="group flex items-center justify-between py-5 border-b border-border hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl md:text-3xl uppercase w-12 text-muted-foreground group-hover:text-primary transition-colors">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl md:text-3xl uppercase">{d.day}</span>
                  </div>
                  <span
                    className={`font-mono text-sm md:text-lg tracking-wider ${
                      d.closed ? "text-muted-foreground" : "text-primary font-semibold"
                    }`}
                  >
                    {d.hours}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Más de 100 horas semanales para que no tengas excusas.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};