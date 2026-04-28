const clients = [
  'CocaCola', 'Samsung', 'Unilever', 'Toyota', 'Absa', 'MTN',
  'Heineken', 'Nestlé', 'Standard Bank', 'Vodacom', 'Tiger Brands', 'Distell',
];

export default function Clients() {
  return (
    <section className="bg-[#0a0a0a] py-10 border-t border-b border-white/5 overflow-hidden">
      <p className="text-center text-white/25 text-xs font-bold tracking-[0.2em] uppercase mb-7">
        Trusted by Africa's leading brands
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="font-display font-black text-2xl text-white/15 hover:text-[#2DE2C8]/60 transition-colors cursor-default flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
