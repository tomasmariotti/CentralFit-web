import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Horarios", href: "#horarios" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Central Fit — Inicio">
          <img
            src={logo}
            alt="Central Fit logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300 invert brightness-110"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:scale-105 hover:glow-lime transition-all duration-300"
        >
          Reservá gratis
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl",
          open ? "max-h-96 border-t border-border/60" : "max-h-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-display tracking-wide hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground px-5 py-3 text-center font-bold uppercase tracking-wider"
          >
            Reservá tu día gratis
          </a>
        </nav>
      </div>
    </header>
  );
};