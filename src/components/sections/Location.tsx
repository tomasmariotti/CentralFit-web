import { Reveal } from "@/components/Reveal";
import { MapPin, Navigation, Car, Bus } from "lucide-react";

export const Location = () => {
  const address = "Gral. José María Paz 3645, Olivos";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
              · Ubicación
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
              Estamos en <br />
              <span className="text-primary">Olivos</span>.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 p-6 border border-border bg-card">
              <MapPin className="w-7 h-7 text-primary mb-3" />
              <p className="font-display text-2xl uppercase">{address}</p>
              <p className="text-muted-foreground mt-2">Buenos Aires, Argentina</p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Reveal delay={300}>
              <div className="p-5 border border-border bg-card hover:border-primary transition-colors">
                <Car className="w-5 h-5 text-primary mb-2" />
                <div className="font-bold uppercase text-sm tracking-wider">En auto</div>
                <p className="text-xs text-muted-foreground mt-1">Estacionamiento cerca</p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="p-5 border border-border bg-card hover:border-primary transition-colors">
                <Bus className="w-5 h-5 text-primary mb-2" />
                <div className="font-bold uppercase text-sm tracking-wider">Transporte</div>
                <p className="text-xs text-muted-foreground mt-1">Múltiples líneas</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm w-fit hover:glow-lime hover:scale-[1.03] transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              Cómo llegar
            </a>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200}>
          <div className="relative h-full min-h-[450px] border border-border overflow-hidden">
            <iframe
              title="Ubicación Central Fit"
              src={embedUrl}
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none border-4 border-primary/0 hover:border-primary/40 transition-all" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};