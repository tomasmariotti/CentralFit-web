import { Reveal } from "@/components/Reveal";
import appImg from "@/assets/app-mockup.jpg";
import { Apple, Smartphone, Zap, Calendar, Activity } from "lucide-react";

export const AppSection = () => {
  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <Reveal variant="left">
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full" />
            <img
              src={appImg}
              alt="App de Central Fit"
              loading="lazy"
              width={1200}
              height={1400}
              className="relative w-full max-w-md mx-auto animate-float"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · App Central Fit
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Tu entrenamiento <br />
              en tu <span className="text-primary">celular</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Accedé a tus rutinas, reservá clases y seguí tu progreso desde cualquier lugar.
              Todo Central Fit en tu bolsillo.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { Icon: Calendar, t: "Reservá clases" },
              { Icon: Activity, t: "Tu progreso" },
              { Icon: Zap, t: "Rutinas live" },
            ].map(({ Icon, t }, i) => (
              <Reveal key={t} delay={300 + i * 100}>
                <div className="p-4 border border-border bg-card/60">
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-sm font-bold uppercase tracking-wider">{t}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 hover:scale-[1.03] transition-transform"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-80">Descargar en</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 hover:scale-[1.03] transition-transform"
              >
                <Smartphone className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-80">Disponible en</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};