import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10 overflow-hidden">
      <div className="container">
        {/* Massive type */}
        <div className="font-display text-[clamp(4rem,18vw,18rem)] leading-[0.85] uppercase text-stroke select-none mb-12">
          Central Fit
        </div>

        <div className="grid md:grid-cols-4 gap-10 pt-12 border-t border-border">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Central Fit logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain invert brightness-110"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Gimnasio premium en Olivos. Resultados reales con acompañamiento real.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Navegá</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#horarios" className="text-muted-foreground hover:text-primary transition-colors">Horarios</a></li>
              <li><a href="#precios" className="text-muted-foreground hover:text-primary transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Gral. José María Paz 3645, Olivos
              </li>
              <li>
                <a href="tel:+541137598078" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  011 3759-8078
                </a>
              </li>
              <li>
                <a href="https://instagram.com/central.fit_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4 text-primary" />
                  @central.fit_
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lun – Vie: 06:00 — 23:00</li>
              <li>Sábado: 08:00 — 16:00</li>
              <li>Domingo: cerrado</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <div>© {new Date().getFullYear()} Central Fit. Todos los derechos reservados.</div>
          <div>Hecho con disciplina en Olivos · BA</div>
        </div>
      </div>
    </footer>
  );
};