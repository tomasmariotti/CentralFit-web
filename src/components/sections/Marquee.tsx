export const Marquee = () => {
  const items = ["Fuerza", "Boxeo", "Funcional", "Comunidad", "Resultados", "Disciplina", "Olivos"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative bg-primary text-primary-foreground py-6 overflow-hidden border-y border-primary/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {repeated.map((w, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-3xl md:text-4xl uppercase">
            {w}
            <span className="w-2 h-2 bg-primary-foreground rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};