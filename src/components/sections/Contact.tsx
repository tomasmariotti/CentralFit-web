import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Phone, Instagram, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const wpp = "https://wa.me/541137598078?text=Hola!%20Quiero%20info%20de%20Central%20Fit";

export const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Completá todos los campos.");
      return;
    }
    toast.success("¡Mensaje enviado! Te contactamos en breve.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
                · Contacto
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-6xl md:text-8xl uppercase mt-4 leading-[0.9]">
                Empezá <br />
                <span className="text-primary">hoy</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Resultados reales con acompañamiento real. Escribinos y arrancamos.
              </p>
            </Reveal>

            <div className="mt-12 space-y-3">
              <Reveal delay={300}>
                <a
                  href="tel:+541137598078"
                  className="group flex items-center justify-between p-5 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono</div>
                      <div className="font-display text-xl uppercase">011 3759-8078</div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Llamar →
                  </span>
                </a>
              </Reveal>
              <Reveal delay={400}>
                <a
                  href={wpp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                      <div className="font-display text-xl uppercase">Escribinos ahora</div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Chatear →
                  </span>
                </a>
              </Reveal>
              <Reveal delay={500}>
                <a
                  href="https://instagram.com/central.fit_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                      <div className="font-display text-xl uppercase">@central.fit_</div>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Seguir →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal variant="scale" delay={200}>
            <form
              onSubmit={submit}
              className="bg-card border border-border p-8 md:p-10"
            >
              <h3 className="font-display text-3xl uppercase mb-2">Reservá tu día gratis</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Dejanos tus datos y te contactamos en menos de 24hs.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Mensaje
                  </label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    rows={4}
                    className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Contanos qué buscás..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-wider text-sm hover:glow-lime hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};