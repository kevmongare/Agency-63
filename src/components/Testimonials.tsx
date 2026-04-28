import { Star } from 'lucide-react';

const testimonials = [
  { quote: "Agency 63 exceeded every expectation. Our product launch was the most talked-about activation in our category — 3x the coverage we projected. The team is professional, creative, and relentless in their execution.", name: 'Sarah Mitchell', title: 'Head of Marketing, BeverageCo', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80', rating: 5 },
  { quote: "The World Calling roadshow they executed for us reached 22 cities across 3 countries. Millions of consumer touchpoints, zero hiccups. Agency 63 is the real deal when it comes to large-scale BTL.", name: 'David Nkosi', title: 'Brand Director, TeleCom Africa', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', rating: 5 },
  { quote: "From concept to execution, they nailed it. Our annual gala had 600 guests and not a single detail was out of place. The creative direction was bold, sophisticated, and unmistakably on-brand.", name: 'Aisha Balogun', title: 'CEO, Style House Africa', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0f0f0f] py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#2DE2C8] text-xs font-bold tracking-[0.25em] uppercase mb-4">CLIENT STORIES</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#161616] border border-white/5 rounded-lg p-7 hover:border-[#2DE2C8]/20 transition-colors duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#2DE2C8" className="text-[#2DE2C8]" />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" style={{border: '2px solid rgba(45,226,200,0.3)'}} />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
