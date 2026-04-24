import heroImg from "@/assets/hero-training.jpg";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Entrenamiento intenso en Central Fit"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105 animate-[fade-in_1.4s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Vertical text accent */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
          Olivos · Buenos Aires · Est. 2018
        </span>
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <span className="w-12 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              Gimnasio Premium
            </span>
          </div>

          <h1
            className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] uppercase animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Entrená
            <br />
            en serio.
            <br />
            <span className="text-primary">Entrená en</span>
            <br />
            <span className="text-stroke">Central Fit.</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Gimnasio en Olivos con entrenadores que te acompañan y un ambiente que te motiva.
            Acá no entrenás solo.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm hover:glow-lime transition-all duration-300 hover:scale-[1.03]"
            >
              Reservá tu día gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#nosotros"
              className="group inline-flex items-center justify-center gap-3 border border-border bg-background/40 backdrop-blur px-8 py-4 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Vení a conocernos
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.85s" }}
          >
            {[
              { n: "500+", l: "Alumnos activos" },
              { n: "7", l: "Años en Olivos" },
              { n: "5★", l: "Reseñas Google" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};