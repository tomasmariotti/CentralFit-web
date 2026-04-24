import { Reveal } from "@/components/Reveal";
import liftingImg from "@/assets/lifting.jpg";
import coachingImg from "@/assets/coaching.jpg";
import { Check } from "lucide-react";

const features = [
  { t: "Atención personalizada", d: "Conocemos a cada alumno por su nombre y sus objetivos." },
  { t: "Profesores predispuestos", d: "Siempre cerca para corregir, motivar y ayudarte a mejorar." },
  { t: "Ambiente motivador", d: "Una comunidad real que entrena fuerte y te empuja a más." },
];

export const About = () => {
  return (
    <section id="nosotros" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Images */}
        <Reveal variant="left">
          <div className="relative grid grid-cols-5 grid-rows-6 gap-4 h-[600px]">
            <img
              src={liftingImg}
              alt="Atleta entrenando con barra"
              loading="lazy"
              width={1200}
              height={1500}
              className="col-span-3 row-span-6 object-cover w-full h-full"
            />
            <img
              src={coachingImg}
              alt="Entrenador guiando a un alumno"
              loading="lazy"
              width={1400}
              height={1000}
              className="col-span-2 row-span-3 col-start-4 object-cover w-full h-full mt-12"
            />
            <div className="col-span-2 row-span-3 col-start-4 row-start-4 bg-primary text-primary-foreground p-6 flex flex-col justify-end">
              <div className="font-display text-6xl">7+</div>
              <div className="text-xs uppercase tracking-wider mt-2 opacity-90">
                Años transformando alumnos en Olivos
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · Sobre nosotros
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Más que <br />
              un <span className="text-primary">gimnasio</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Central Fit no es solo un lugar para entrenar. Es una comunidad real de gente que
              busca resultados de verdad, con acompañamiento de verdad. Acá vas a encontrar el
              ambiente, el equipamiento y los profesionales para que cada sesión cuente.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={300 + i * 100}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg uppercase tracking-wide">{f.t}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <p className="mt-12 font-display text-2xl md:text-3xl uppercase border-l-4 border-primary pl-6 leading-tight">
              "No vengas a perder el tiempo. <br />
              Vení a entrenar <span className="text-primary">en serio</span>."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};